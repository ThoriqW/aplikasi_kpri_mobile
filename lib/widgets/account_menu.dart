import 'package:flutter/material.dart';

class AccountMenu extends StatelessWidget {
  const AccountMenu(
      {super.key, required this.icon, required this.text, required this.onTap});
  final IconData icon;
  final String text;
  final Function onTap;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        onTap();
      },
      child: Container(
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(
          border: Border(
            bottom: BorderSide(
                width: 2,
                color: Theme.of(context).colorScheme.onInverseSurface),
          ),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Row(
              children: [
                Icon(
                  icon,
                  color: Theme.of(context).colorScheme.primary,
                ),
                const SizedBox(width: 8),
                Text(text),
              ],
            ),
            Icon(
              Icons.arrow_right,
              color: Theme.of(context).colorScheme.onSurfaceVariant,
            )
          ],
        ),
      ),
    );
  }
}
