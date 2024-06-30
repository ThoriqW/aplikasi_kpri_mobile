import 'package:aplikasi_kpri_mobile/views/detail_notification_view.dart';
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
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(12),
                  color: Colors.white,
                  boxShadow: const [
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
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => const DetailNotificationView(
                              title: "Pengumuman Potongan Simpanan Wajib",
                              subTitle:
                                  "Potongan Simpanan Wajib Anggota Mulai Januari 2024 Akan Dinaikan Dari Rp. 25,000 Menjadi Rp. 50,000",
                            ),
                          ),
                        );
                      },
                      notifTitle: "Pengumuman Potongan Simpanan Wajib",
                      notifContent:
                          "Potongan Simpanan Wajib Anggota Mulai Januari 2024 Akan Dinaikan Dari Rp. 25,000 Menjadi Rp. 50,000",
                      date: DateTime.now(),
                      colorIcon: Theme.of(context).colorScheme.onPrimary,
                      backgroundIcon: Theme.of(context).colorScheme.tertiary,
                      notifIcon: Icons.notifications,
                    ),
                    NotificationCard(
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => const DetailNotificationView(
                              title: "Pengumuman Potongan Simpanan Wajib",
                              subTitle:
                                  "Potongan Simpanan Wajib Anggota Mulai Januari 2024 Akan Dinaikan Dari Rp. 25,000 Menjadi Rp. 50,000",
                            ),
                          ),
                        );
                      },
                      notifTitle: "KPRI KD Buka Layanan Penjualan Pulsa",
                      notifContent:
                          "KPRI KD Kini Menyediakan Jasa Penjualan Pulsa Untuk Semua Anggota KPRI KD",
                      date: DateTime.now(),
                      colorIcon: Theme.of(context).colorScheme.onPrimary,
                      backgroundIcon: Theme.of(context).colorScheme.tertiary,
                      notifIcon: Icons.notifications,
                    ),
                    NotificationCard(
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => const DetailNotificationView(
                              title: "Pengumuman Potongan Simpanan Wajib",
                              subTitle:
                                  "Potongan Simpanan Wajib Anggota Mulai Januari 2024 Akan Dinaikan Dari Rp. 25,000 Menjadi Rp. 50,000",
                            ),
                          ),
                        );
                      },
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
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => const DetailNotificationView(
                              title: "Pengumuman Potongan Simpanan Wajib",
                              subTitle:
                                  "Potongan Simpanan Wajib Anggota Mulai Januari 2024 Akan Dinaikan Dari Rp. 25,000 Menjadi Rp. 50,000",
                            ),
                          ),
                        );
                      },
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
