import 'package:flutter/material.dart';

class HomeMenu extends StatelessWidget {
  const HomeMenu({super.key, required this.title, required this.image});
  final String title;
  final String image;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: Theme.of(context).colorScheme.onInverseSurface,
        borderRadius: BorderRadius.circular(8),
      ),
      child: Column(
        children: [
          Image.asset(
            "assets/images/$image",
            height: 35,
            width: 65,
          ),
          const SizedBox(height: 8),
          Text(
            title,
            style: const TextStyle(
              fontSize: 12,
              fontWeight: FontWeight.bold,
            ),
          )
        ],
      ),
    );
  }
}
