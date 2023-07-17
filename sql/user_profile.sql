CREATE TABLE user_profile (
    user_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    ownerFirstName VARCHAR(20),
    ownerLastName VARCHAR(20),
    ownerDisplayName VARCHAR (20),
    ownerAddress VARCHAR (100),
    ownerCity VARCHAR (30),
    ownerState VARCHAR (2),
    ownerZip INTEGER,
    ownerEmail VARCHAR (50),
    dogName VARCHAR (25),
    dogBreed VARCHAR (30),
    dogGender VARCHAR (6),
    dogColor VARCHAR (30),
    dogBirthdate VARCHAR (5),
    dogAllergies VARCHAR (200),
    dogWeight INTEGER (3),
    dogFriendly BOOLEAN,
    amtWalks INTEGER (2),
    amtMeals INTEGER (2),
    dogPottyTrained BOOLEAN,
    dogFixed BOOLEAN
);