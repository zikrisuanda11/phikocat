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
        Schema::create('product_pets', function (Blueprint $table) {
            $table->id();
            $table->string('name_product');
            $table->string('description_product');
            $table->bigInteger('price_product');
            $table->integer('stock_product');
            $table->foreignId('type_product_id')->constrained('type_product_pets')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_pets');
    }
};
