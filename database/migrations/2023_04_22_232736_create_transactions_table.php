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
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->date('date_transaction');
            $table->bigInteger('amount');
            $table->unsignedInteger('type_transaction_id');
            $table->foreign('type_transaction_id')->references('id')->on('type_transactions');
            $table->enum('type_payment', ['transfer', 'cod']);
            $table->enum('status_transaction', ['failed','pending','success']);
            $table->string('evidence_of_transfer')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
