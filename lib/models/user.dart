class User {
  final String id;
  final String nip;

  User({required this.id, required this.nip});

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      id: json["id"],
      nip: json["nip"],
    );
  }
}
