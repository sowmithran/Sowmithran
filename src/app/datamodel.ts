export class users{

constructor(public $key:string,public age:number,public city:string, public name:string,public street:string,
public yoe:number)
{

}




static fromJsonList(array): users[] {
return array.map(users.fromJson);
}

static fromJson({$key, age, city, name,street,yoe}): users {
console.log('new user', $key,age, city, name,street,yoe);
return new users($key, age, city, name,street,yoe);
}
}

