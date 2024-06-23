import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HomeMenu extends StatelessWidget {
  const HomeMenu(
      {super.key,
      required this.title,
      required this.image,
      required this.onTap});
  final String title;
  final String image;
  final Function onTap;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        onTap();
      },
      child: Column(
        children: [
          SvgPicture.asset(
            "assets/images/$image",
            width: 45,
          ),
          const SizedBox(height: 8),
          Text(
            title,
            style: const TextStyle(
              fontSize: 10,
              fontWeight: FontWeight.bold,
            ),
          )
        ],
      ),
    );
  }
}
