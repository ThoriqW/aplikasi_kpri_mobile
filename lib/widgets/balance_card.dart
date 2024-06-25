import 'package:flutter/material.dart';

class BalanceCard extends StatelessWidget {
  const BalanceCard({
    super.key,
    required this.title,
    required this.nominal,
    required this.date,
    required this.icon,
    required this.onTap,
    required this.colorIcon,
    required this.borderIcon,
  });

  final String title;
  final String nominal;
  final DateTime date;
  final IconData icon;
  final Function onTap;
  final Color colorIcon;
  final Color borderIcon;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        onTap();
      },
      child: Container(
        padding: const EdgeInsets.only(bottom: 16, top: 16),
        decoration: BoxDecoration(
          border: Border(
            bottom: BorderSide(
              width: 2,
              color: Theme.of(context).colorScheme.onInverseSurface,
            ),
          ),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Row(
              children: [
                Container(
                  padding: const EdgeInsets.all(6),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(
                      width: 2,
                      color: borderIcon,
                    ),
                  ),
                  child: Icon(
                    icon,
                    color: colorIcon,
                  ),
                ),
                const SizedBox(
                  width: 12,
                ),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      title,
                      style: const TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 12,
                      ),
                    ),
                    const SizedBox(
                      height: 6,
                    ),
                    Text(
                      date.toString(),
                      style: const TextStyle(
                          fontWeight: FontWeight.w300, fontSize: 8),
                    )
                  ],
                ),
              ],
            ),
            Text(
              nominal,
              style: const TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 12,
              ),
            )
          ],
        ),
      ),
    );
  }
}
