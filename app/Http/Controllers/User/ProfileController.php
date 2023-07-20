<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\DetailTransaction;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    public function index()
    {
        $user = User::where('id', auth()->user()->id)->first();
        $transaction = Transaction::where('user_id', auth()->user()->id)->orderBy('id', 'desc')->paginate(5);
        // $detailTransaction = DetailTransaction::paginate(5);
        $transaction->load('typeTransaction');
        return inertia('Customer/Profile/index', [
            'user' => $user,
            'transactions' => $transaction,
            // 'detailTransaction' => $detailTransaction
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'phone' => 'required',
        ]);

        $user = User::find($id);

        if ($request->file('photo_profile') == null) {
            $user->update([
                'name' => $request->name,
                'phone' => $request->phone,
            ]);

            return session()->flash('message', 'Berhasil mengubah profile');
        }

        if($request->file('photo_profile')){
            File::exists(public_path($user->photo_product));
            File::delete(public_path($user->photo_profile));
            $path = Storage::put('public/photo_profile', $request->file('photo_profile'));
            $pathUrl = Storage::url($path);
    
            $user->update([
                'name' => $request->name,
                'phone' => $request->phone,
                'photo_profile' => $pathUrl
            ]);
    
            return session()->flash('message', 'Berhasil mengubah profile');
        }
    }
}
