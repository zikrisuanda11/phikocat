<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
        return inertia('Admin/User/Index', [
            'users' => $users
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/User/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserRequest $request)
    {
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'is_active' => $request->is_active,
            'password' => Hash::make($request->password)
        ]);
        return redirect()->route('users.index')->with('message', 'Berhasil menambahkan data');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $user = User::find($id);
        return inertia('Admin/User/Edit', [
            'user' => $user
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate((new UserRequest([$id]))->updateRules(), (new UserRequest())->updateMessage());

        $data = User::find($id);
        $data->update([
            'name' => $request->name,
            'email' => $request->email,
            'is_active' => $request->is_active,
        ]);
        return redirect()->route('users.index')->with('message', 'Berhasil mengubah data');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = User::find($id);
        $data->delete();
        return redirect()->route('users.index')->with('message', 'Berhasil menghapus data');
    }

    public function nonActiveUser($id)
    {
        $data = User::find($id);
        $data->update([
            'is_active' => false
        ]);
    }
}
