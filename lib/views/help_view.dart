import 'package:aplikasi_kpri_mobile/widgets/help_card.dart';
import 'package:flutter/material.dart';

class HelpView extends StatelessWidget {
  const HelpView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "Pusat Bantuan",
          style: TextStyle(
            color: Theme.of(context).colorScheme.onPrimary,
          ),
        ),
        iconTheme: IconThemeData(
          color: Theme.of(context).colorScheme.onPrimary,
        ),
        backgroundColor: Theme.of(context).colorScheme.primary,
      ),
      body: SingleChildScrollView(
        child: Center(
          child: Container(
            width: MediaQuery.of(context).size.width - 32,
            margin: const EdgeInsets.only(top: 35, bottom: 35),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  "Pengaduan",
                  style: TextStyle(
                    color: Theme.of(context).colorScheme.primary,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const HelpCard(
                  icon: Icons.list,
                  title: "Pengaduan Saya",
                  subTitle:
                      "Lihat semua status pengaduan terkait transaksi disni",
                ),
                Text(
                  "Semua Topik",
                  style: TextStyle(
                    color: Theme.of(context).colorScheme.primary,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const HelpCard(
                  icon: Icons.help_center,
                  title: "Ajukan Pengaduan",
                  subTitle:
                      "Ajukan pengaduan terkait kegagalan transaksi diseluruh aplikasi koperasi",
                ),
                const HelpCard(
                  icon: Icons.book,
                  title: "Tentang Koperasi",
                  subTitle:
                      "Dapatkan informasi dan pertanyaan yang sering diajukan",
                ),
                Text(
                  "Hubungi Kami",
                  style: TextStyle(
                    color: Theme.of(context).colorScheme.primary,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const HelpCard(
                  icon: Icons.phone,
                  title: "Contact Admin",
                  subTitle: "082296709235",
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
