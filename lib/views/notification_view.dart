import 'package:aplikasi_kpri_mobile/widgets/notification_card.dart';
import 'package:flutter/material.dart';

class NotificationView extends StatelessWidget {
  const NotificationView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "Notifikasi",
          style: TextStyle(color: Theme.of(context).colorScheme.onPrimary),
        ),
        backgroundColor: Theme.of(context).colorScheme.primary,
      ),
      body: SingleChildScrollView(
        child: Center(
          child: Column(
            children: [
              Container(
                width: MediaQuery.of(context).size.width - 32,
                margin: const EdgeInsets.only(top: 35, bottom: 35),
                padding:
                    const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                decoration: const BoxDecoration(
                  color: Colors.white,
                  boxShadow: [
                    BoxShadow(
                      color: Color.fromRGBO(0, 0, 0, 0.1),
                      blurRadius: 9,
                      spreadRadius: 0,
                      offset: Offset(0, 2),
                    ),
                  ],
                ),
                child: Column(
                  children: [
                    NotificationCard(
                      notifTitle: "Pengumuman Potongan Simpanan Wajib",
                      notifContent:
                          "Potongan Simpanan Wajib Anggota Mulai Januari 2024 Akan Dinaikan Dari Rp. 25,000 Menjadi Rp. 50,000",
                      date: DateTime.now(),
                      colorIcon: Theme.of(context).colorScheme.onPrimary,
                      backgroundIcon: Theme.of(context).colorScheme.tertiary,
                      notifIcon: Icons.notifications,
                    ),
                    NotificationCard(
                      notifTitle: "KPRI KD Buka Layanan Penjualan Pulsa",
                      notifContent:
                          "KPRI KD Kini Menyediakan Jasa Penjualan Pulsa Untuk Semua Anggota KPRI KD",
                      date: DateTime.now(),
                      colorIcon: Theme.of(context).colorScheme.onPrimary,
                      backgroundIcon: Theme.of(context).colorScheme.tertiary,
                      notifIcon: Icons.notifications,
                    ),
                    NotificationCard(
                      notifTitle: "Tagihan Bulan Desembar",
                      notifContent:
                          "KPRI KD Kini Menyediakan Jasa Penjualan Pulsa Untuk Semua Anggota KPRI KD",
                      date: DateTime.now(),
                      colorIcon: Theme.of(context).colorScheme.primary,
                      backgroundIcon:
                          Theme.of(context).colorScheme.primaryContainer,
                      notifIcon: Icons.check,
                    ),
                    NotificationCard(
                      notifTitle: "Tunggakan Tagihan",
                      notifContent:
                          "Tagiahan November 2023 Belum Dibayarkan Dengan Total Rp. 395,000 Segera Lakukan Pembayaran",
                      date: DateTime.now(),
                      colorIcon: Theme.of(context).colorScheme.onError,
                      backgroundIcon: Theme.of(context).colorScheme.error,
                      notifIcon: Icons.error,
                    )
                  ],
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
