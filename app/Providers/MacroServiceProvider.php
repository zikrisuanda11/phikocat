<?php

namespace App\Providers;

use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Support\ServiceProvider;

class MacroServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        Builder::macro('customPaginate', function () {
            if (request()->pagination === 'none') {
                return $this->get();
            }
            $page = Paginator::resolveCurrentPage();
            $perPage = request()->per_page ? request()->per_page : 20;
            $results = ($total = $this->toBase()->getCountForPagination())
                ? $this->forPage($page, $perPage)->get(['*'])
                : $this->model->newCollection();
            return $this->paginator($results, $total, $perPage, $page, [
                'path'     => Paginator::resolveCurrentPath(),
                'pageName' => 'page',
            ]);
        });
    }
}
