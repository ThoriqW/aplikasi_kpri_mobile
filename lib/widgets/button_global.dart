import 'package:flutter/material.dart';

class ButtonGlobal extends StatelessWidget {
  const ButtonGlobal({super.key, required this.text, required this.onTap});
  final String text;
  final Function onTap;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Theme.of(context)
          .colorScheme
          .primary, // Set the background color here
      borderRadius: BorderRadius.circular(8.0),
      elevation: 4.0,
      child: InkWell(
        onTap: () => {onTap()},
        borderRadius: BorderRadius.circular(8.0),
        child: SizedBox(
          width: double.infinity,
          height: 45,
          child: Center(
            child: Text(
              text,
              style: const TextStyle(
                fontSize: 16,
                color: Colors.white,
                fontWeight: FontWeight.w600,
              ),
            ),
          ),
        ),
      ),
    );
  }
}
