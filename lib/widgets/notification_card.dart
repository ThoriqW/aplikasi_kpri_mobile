import 'package:flutter/material.dart';

class NotificationCard extends StatelessWidget {
  const NotificationCard({
    super.key,
    required this.notifTitle,
    required this.notifContent,
    required this.date,
    required this.colorIcon,
    required this.backgroundIcon,
    required this.notifIcon,
    required this.onTap,
  });

  final String notifTitle;
  final String notifContent;
  final DateTime date;
  final Color colorIcon;
  final Color backgroundIcon;
  final IconData notifIcon;
  final Function onTap;

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
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              padding: const EdgeInsets.all(6),
              decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(50),
                  color: backgroundIcon),
              child: Icon(
                notifIcon,
                color: colorIcon,
              ),
            ),
            const SizedBox(
              width: 12,
            ),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    notifTitle,
                    style: const TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 12,
                    ),
                  ),
                  const SizedBox(
                    height: 6,
                  ),
                  Text(
                    notifContent,
                    style: const TextStyle(
                        fontWeight: FontWeight.w300, fontSize: 8),
                  ),
                  const SizedBox(
                    height: 4,
                  ),
                  Text(
                    date.toString(),
                    style: const TextStyle(
                        fontWeight: FontWeight.w300, fontSize: 8),
                  )
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
