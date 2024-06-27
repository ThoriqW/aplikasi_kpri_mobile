class Authentication {
  final String accessToken;

  Authentication({required this.accessToken});

  factory Authentication.fromJson(Map<String, dynamic> json) {
    return Authentication(
      accessToken: json["token"],
    );
  }
}
