import 'package:aplikasi_kpri_mobile/widgets/balance_card.dart';
import 'package:flutter/material.dart';

class BalanceView extends StatelessWidget {
  const BalanceView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "Simpanan",
          style: TextStyle(
            color: Theme.of(context).colorScheme.onPrimary,
          ),
        ),
        backgroundColor: Theme.of(context).colorScheme.primary,
        iconTheme: IconThemeData(
          color: Theme.of(context).colorScheme.onPrimary,
        ),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Stack(
              alignment: Alignment.bottomCenter,
              clipBehavior: Clip.none,
              children: [
                Container(
                  color: Theme.of(context).colorScheme.primary,
                  width: double.infinity,
                  padding: const EdgeInsets.only(top: 34, bottom: 70),
                  child: Column(
                    children: [
                      Text(
                        "Total Simpanan",
                        style: TextStyle(
                            color:
                                Theme.of(context).colorScheme.onInverseSurface,
                            fontSize: 12),
                      ),
                      Text(
                        "Rp.2,501,000",
                        style: TextStyle(
                          color: Theme.of(context).colorScheme.onPrimary,
                          fontWeight: FontWeight.bold,
                          fontSize: 32,
                        ),
                      )
                    ],
                  ),
                ),
                Positioned(
                  bottom: -35,
                  child: Container(
                    width: MediaQuery.of(context).size.width - 32,
                    decoration: BoxDecoration(
                      color: Theme.of(context).colorScheme.primaryContainer,
                      borderRadius: BorderRadius.circular(12),
                      boxShadow: const [
                        BoxShadow(
                          color: Color.fromRGBO(0, 0, 0, 0.1),
                          blurRadius: 12,
                          spreadRadius: 0,
                          offset: Offset(0, 4),
                        ),
                      ],
                    ),
                    padding: const EdgeInsets.symmetric(
                      horizontal: 12.0,
                      vertical: 18.0,
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        Expanded(
                          child: Column(
                            children: [
                              Text(
                                "Pokok",
                                style: TextStyle(
                                  fontSize: 10,
                                  color: Theme.of(context)
                                      .colorScheme
                                      .onPrimaryContainer,
                                ),
                              ),
                              const SizedBox(height: 5),
                              Text(
                                "Rp.10,000",
                                style: TextStyle(
                                  fontSize: 13,
                                  fontWeight: FontWeight.bold,
                                  color: Theme.of(context)
                                      .colorScheme
                                      .onPrimaryContainer,
                                ),
                              ),
                            ],
                          ),
                        ),
                        Expanded(
                          child: Column(
                            children: [
                              Text(
                                "Wajib",
                                style: TextStyle(
                                  fontSize: 10,
                                  color: Theme.of(context)
                                      .colorScheme
                                      .onPrimaryContainer,
                                ),
                              ),
                              const SizedBox(height: 5),
                              Text(
                                "Rp.2,400,000",
                                style: TextStyle(
                                  fontSize: 13,
                                  color: Theme.of(context)
                                      .colorScheme
                                      .onPrimaryContainer,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                            ],
                          ),
                        ),
                        Expanded(
                          child: Column(
                            children: [
                              Text(
                                "Suka Rela",
                                style: TextStyle(
                                  fontSize: 10,
                                  color: Theme.of(context)
                                      .colorScheme
                                      .onPrimaryContainer,
                                ),
                              ),
                              const SizedBox(height: 5),
                              Text(
                                "0",
                                style: TextStyle(
                                  fontSize: 13,
                                  color: Theme.of(context)
                                      .colorScheme
                                      .onPrimaryContainer,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                )
              ],
            ),
            Container(
              margin: const EdgeInsets.only(top: 60),
              width: MediaQuery.of(context).size.width - 32,
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
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
                  BalanceCard(
                    title: "Simpanan Wajib",
                    nominal: "Rp.25,000",
                    colorIcon: Theme.of(context).colorScheme.primary,
                    borderIcon: Theme.of(context).colorScheme.primaryContainer,
                    date: DateTime.now(),
                    icon: Icons.arrow_upward,
                    onTap: () {},
                  ),
                  BalanceCard(
                    title: "Simpanan Pokok",
                    nominal: "Rp.25,000",
                    colorIcon: Theme.of(context).colorScheme.primary,
                    borderIcon: Theme.of(context).colorScheme.primaryContainer,
                    date: DateTime.now(),
                    icon: Icons.arrow_upward,
                    onTap: () {},
                  ),
                  BalanceCard(
                    title: "Suka Rela",
                    nominal: "Rp.25,000",
                    colorIcon: Theme.of(context).colorScheme.primary,
                    borderIcon: Theme.of(context).colorScheme.primaryContainer,
                    date: DateTime.now(),
                    icon: Icons.arrow_upward,
                    onTap: () {},
                  ),
                  BalanceCard(
                    title: "Simpanan Wajib",
                    nominal: "Rp.25,000",
                    colorIcon: Theme.of(context).colorScheme.primary,
                    borderIcon: Theme.of(context).colorScheme.primaryContainer,
                    date: DateTime.now(),
                    icon: Icons.arrow_upward,
                    onTap: () {},
                  ),
                  BalanceCard(
                    title: "Simpanan Wajib",
                    nominal: "Rp.25,000",
                    colorIcon: Theme.of(context).colorScheme.primary,
                    borderIcon: Theme.of(context).colorScheme.primaryContainer,
                    date: DateTime.now(),
                    icon: Icons.arrow_upward,
                    onTap: () {},
                  )
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
