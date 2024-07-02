class Profile {
  final int id;
  final int userId;
  final String fullName;
  final String position;
  final String nip;
  final String address;
  final String photoUrl;
  final String joinDate;
  final String status;
  final String gender;
  final String birthDate;
  final String phoneNumber;
  final String email;

  Profile({
    required this.id,
    required this.userId,
    required this.fullName,
    required this.position,
    required this.address,
    required this.photoUrl,
    required this.joinDate,
    required this.status,
    required this.gender,
    required this.birthDate,
    required this.phoneNumber,
    required this.email,
    required this.nip,
  });

  factory Profile.fromJson(Map<String, dynamic> json) {
    return Profile(
      id: json['profile']["id"],
      userId: json['profile']["user_id"],
      fullName: json['profile']["full_name"],
      nip: json['profile']["nip"],
      position: json['profile']["position"],
      address: json['profile']["address"],
      photoUrl: json['profile']["photo_url"],
      joinDate: json['profile']["join_date"],
      status: json['profile']["status"],
      gender: json['profile']["gender"],
      birthDate: json['profile']["birth_date"],
      phoneNumber: json['profile']["phone_number"],
      email: json['profile']["email"],
    );
  }
}
