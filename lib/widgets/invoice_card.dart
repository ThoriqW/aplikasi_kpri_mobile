import 'package:flutter/material.dart';

class InvoiceCard extends StatelessWidget {
  const InvoiceCard({
    super.key,
    required this.month,
    required this.status,
    required this.nominal,
    required this.date,
    required this.colorIcon,
    required this.borderIcon,
  });
  final String month;
  final String status;
  final String nominal;
  final DateTime date;
  final Color colorIcon;
  final Color borderIcon;

  @override
  Widget build(BuildContext context) {
    return Container(
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
                  border: Border.all(width: 2, color: borderIcon),
                ),
                child: Icon(
                  Icons.notes,
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
                    month,
                    style: const TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 12,
                    ),
                  ),
                  const SizedBox(
                    height: 6,
                  ),
                  Text(
                    status,
                    style: const TextStyle(
                        fontWeight: FontWeight.w300, fontSize: 8),
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
    );
  }
}
