import 'package:aplikasi_kpri_mobile/views/detail_invoice_view.dart';
import 'package:aplikasi_kpri_mobile/widgets/invoice_card.dart';
import 'package:flutter/material.dart';

class InvoiceView extends StatelessWidget {
  const InvoiceView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "Tagihan",
          style: TextStyle(color: Theme.of(context).colorScheme.onPrimary),
        ),
        backgroundColor: Theme.of(context).colorScheme.primary,
      ),
      body: Column(
        children: [
          Container(
            color: Theme.of(context).colorScheme.primary,
            padding: const EdgeInsets.all(16.0),
            child: Row(
              children: [
                Expanded(
                  child: TextField(
                    onChanged: (value) {},
                    decoration: InputDecoration(
                      contentPadding: const EdgeInsets.all(8),
                      filled: true,
                      fillColor: Theme.of(context).colorScheme.onPrimary,
                      hintText: "Cari Tagihan",
                      prefixIcon: Icon(
                        Icons.search,
                        color: Theme.of(context).colorScheme.onSurfaceVariant,
                      ),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(8.0),
                        borderSide: BorderSide.none,
                      ),
                    ),
                  ),
                ),
                const SizedBox(
                  width: 8,
                ),
                Icon(
                  Icons.filter_list,
                  color: Theme.of(context).colorScheme.onPrimary,
                )
              ],
            ),
          ),
          Expanded(
            child: SingleChildScrollView(
              child: Container(
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
                    InvoiceCard(
                      month: "Tagihan Desember 2023",
                      status: "Belum Dibayar",
                      nominal: "Rp. 395,000",
                      date: DateTime.now(),
                      colorIcon: Theme.of(context).colorScheme.primary,
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => const DetailInvoiceView(),
                          ),
                        );
                      },
                      borderIcon:
                          Theme.of(context).colorScheme.primaryContainer,
                    ),
                    InvoiceCard(
                      month: "Tagihan November 2023",
                      status: "Belum Dibayar",
                      nominal: "Rp. 395,000",
                      date: DateTime.now(),
                      colorIcon: Theme.of(context).colorScheme.onSurfaceVariant,
                      onTap: () {},
                      borderIcon:
                          Theme.of(context).colorScheme.onSurfaceVariant,
                    ),
                    InvoiceCard(
                      month: "Tagihan Oktober 2023",
                      status: "Belum Dibayar",
                      nominal: "Rp. 395,000",
                      date: DateTime.now(),
                      colorIcon: Theme.of(context).colorScheme.primary,
                      onTap: () {},
                      borderIcon:
                          Theme.of(context).colorScheme.primaryContainer,
                    ),
                    InvoiceCard(
                      month: "Tagihan September 2023",
                      status: "Belum Dibayar",
                      nominal: "Rp. 395,000",
                      date: DateTime.now(),
                      colorIcon: Theme.of(context).colorScheme.primary,
                      onTap: () {},
                      borderIcon:
                          Theme.of(context).colorScheme.primaryContainer,
                    ),
                    InvoiceCard(
                      month: "Tagihan Agustus 2023",
                      status: "Belum Dibayar",
                      nominal: "Rp. 395,000",
                      date: DateTime.now(),
                      colorIcon: Theme.of(context).colorScheme.primary,
                      onTap: () {},
                      borderIcon:
                          Theme.of(context).colorScheme.primaryContainer,
                    ),
                    InvoiceCard(
                      month: "Tagihan Juli 2023",
                      status: "Belum Dibayar",
                      nominal: "Rp. 395,000",
                      date: DateTime.now(),
                      colorIcon: Theme.of(context).colorScheme.primary,
                      onTap: () {},
                      borderIcon:
                          Theme.of(context).colorScheme.primaryContainer,
                    ),
                    InvoiceCard(
                      month: "Tagihan Juni 2023",
                      status: "Belum Dibayar",
                      nominal: "Rp. 395,000",
                      date: DateTime.now(),
                      colorIcon: Theme.of(context).colorScheme.primary,
                      onTap: () {},
                      borderIcon:
                          Theme.of(context).colorScheme.primaryContainer,
                    )
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
