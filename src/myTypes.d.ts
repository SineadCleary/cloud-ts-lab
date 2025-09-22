export interface Friend {
    name: string;
    phone: string;
    dob?: Date;
    age: number;
    interests?: string[]
}

export interface Colleague {
    name: string;
    department: string;
    contact: {
      email: string;
      extension: number
    } 
  }

export interface ColleagueHistory {
  current: Colleague[],
  former: Colleague[]
}

export interface EmailContact {
    name: string,
    email: string
}

export type Department = "Engineering" | "Finance" | "HR";
export interface ColleagueV2 {
  name: string;
  department: Department;
  contact: {
    email: string;
    extension: number;
    slack?: string;
  };
}

export type Buddy = Friend | ColleagueV2;
export type Administrator = Buddy | string | undefined

export type BuddyList = {
  name: string;
  administrator: Administrator;
  members: Buddy[];
};

// The FriendPartial type has the same structure as Friend, but all its properties are optional.
export type FriendPartial = Partial<Friend>
// The EventPass type has the same properties as Colleague except for contact and has an additional property called passCode.
export type EventPass = Omit<Colleague, "contact"> & {
  passCode: number;
}
// Immutable person type, based on Friend type
// generates a type with the same structure as Friend except for age and dob.
export type SecureFriendContact = Readonly<Pick<Friend, "name" | "phone" >>

export type Person = Pick<Friend, "name" | "age"> & Pick<Colleague, "contact">;