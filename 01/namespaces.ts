namespace Utility {
  export function log(msg) {
    console.log(msg)
  }
  export function error(msg) {
    console.error(msg)
  }
}

// usage
Utility.log("Call me");
Utility.error("maybe!")