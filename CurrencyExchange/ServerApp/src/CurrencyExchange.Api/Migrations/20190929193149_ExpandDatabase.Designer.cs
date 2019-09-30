﻿// <auto-generated />
using System;
using CurrencyExchange.Api.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace CurrencyExchange.Api.Migrations
{
    [DbContext(typeof(CurrencyExchangeContext))]
    [Migration("20190929193149_ExpandDatabase")]
    partial class ExpandDatabase
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity("CurrencyExchange.Api.Models.Currency", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<float>("AveragePrice");

                    b.Property<string>("Code");

                    b.Property<string>("Name");

                    b.Property<float>("PurchasePrice");

                    b.Property<float>("SellPrice");

                    b.Property<int>("Unit");

                    b.Property<int>("WalletId");

                    b.HasKey("Id");

                    b.HasIndex("WalletId");

                    b.ToTable("Currencies");
                });

            modelBuilder.Entity("CurrencyExchange.Api.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<byte[]>("PasswordHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<string>("Role");

                    b.Property<string>("Username");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("CurrencyExchange.Api.Models.Wallet", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId")
                        .IsUnique();

                    b.ToTable("Wallets");
                });

            modelBuilder.Entity("CurrencyExchange.Api.Models.Currency", b =>
                {
                    b.HasOne("CurrencyExchange.Api.Models.Wallet", "Wallet")
                        .WithMany("Currencies")
                        .HasForeignKey("WalletId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("CurrencyExchange.Api.Models.Wallet", b =>
                {
                    b.HasOne("CurrencyExchange.Api.Models.User", "User")
                        .WithOne("Wallet")
                        .HasForeignKey("CurrencyExchange.Api.Models.Wallet", "UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}