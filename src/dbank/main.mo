import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {
  stable var currentValue: Float = 300;

  stable var startTime = Time.now();
  // Debug.print(debug_show(startTime));


  // currentValue := 300;
  let id = 21312312476124;

  // Debug.print(debug_show(currentValue));
  // Debug.print(debug_show(id));


  
  public func topUp(amount: Float){
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func withdrawl(amount: Float){
    let tempValue: Float = currentValue - amount;

    if( tempValue>= 0){
    currentValue -= amount;
    Debug.print(debug_show(currentValue));
    }else {
      Debug.print("Not enough moneyYyYY!");
    }
  };


  public query func checkBalanc(): async Float {
    return currentValue;
  };
  // topUp();


  public func compound() {
    let currentTime = Time.now();
    let timeElapsedNS = currentTime - startTime;
    let timeElapsedS = timeElapsedNS / 1000000000;

    currentValue := currentValue * (1.001 ** Float.fromInt(timeElapsedS));

    startTime := currentTime;
  }
 }