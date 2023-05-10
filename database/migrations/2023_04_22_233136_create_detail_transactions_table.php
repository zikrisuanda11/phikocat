<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('detail_transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('transaction_id')->constrained('transactions');
            // product, quantity, total amount
            $table->foreignId('product_id')->constrained('product_pets');
            $table->integer('quantity')->nullable();
            // service, date_service, date_checkin, date_out,
            $table->foreignId('service_id')->constrained('service_pets');
            $table->date('date_service')->nullable();
            $table->date('date_checkin')->nullable();
            $table->date('date_out')->nullable();
            $table->bigInteger('amount');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detail_transactions');
    }
};
