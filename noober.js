async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
for (let i=0; i<json.length; i++) {
  let ride = json[i]
  console.log(ride)



let levelOfService
if (ride.length > 1) {
  levelOfService = 'Noober Pool'
} else if (ride[0].purpleRequested == true) {
  levelOfService = 'Noober Purple'
} else if (ride[0].numberOfPassengers>3) {
  levelOfService = 'Noober XL'
} else {
  levelOfService = 'Noober X'
}

console.log(levelOfService)



let outputElement = document.querySelector('.rides')

  outputElement.insertAdjacentHTML('beforeend', 
  `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
  <i class="fas fa-car-side"></i>
  <span>${levelOfService}</span> 
</h1>`)


// leg = passenger

for (let n=0; n<ride.length; n++) {
  let leg = ride[n] // for each leg in the ride array, asign leg as the variable
  passengerName = `${ride[n].passengerDetails.first} ${ride[n].passengerDetails.last}`
//passengerName = `${leg.passengerDetails.first} ${leg.passengerDetails.last}`
phoneNumber = `${leg.passengerDetails.phoneNumber}`
numberOfPassengers = `${leg.numberOfPassengers} passengers`
pickupLocationLine1 = `${leg.pickupLocation.address}` 
pickupLocationLine2 = `${leg.pickupLocation.city} ${leg.pickupLocation.state} ${leg.pickupLocation.zip}` 
dropoffLocationLine1 = `${leg.dropoffLocation.address}` 
dropoffLocationLine2 = `${leg.dropoffLocation.city} ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}`


outputElement.insertAdjacentHTML('beforeend', `
<div class="border-4 border-gray-900 p-4 my-4 text-left">
<div class="flex">
  <div class="w-1/2">
    <h2 class="text-2xl py-1">${passengerName}</h2>
    <p class="font-bold text-gray-600">${phoneNumber}</p>
  </div>
  <div class="w-1/2 text-right">
    <span class="rounded-xl bg-gray-600 text-white p-2">
      ${numberOfPassengers}
    </span>
  </div>
</div>
<div class="mt-4 flex">
  <div class="w-1/2">
    <div class="text-sm font-bold text-gray-600">PICKUP</div>
    <p>${pickupLocationLine1}</p>
    <p>${pickupLocationLine2}</p>
  </div>
  <div class="w-1/2">
    <div class="text-sm font-bold text-gray-600">DROPOFF</div>
    <p>${dropoffLocationLine1}</p>
    <p>${dropoffLocationLine2}</p>
  </div>
</div>
</div>`)

}



}












  // 🔥 start here: write code to loop through the rides
  
}

window.addEventListener('DOMContentLoaded', pageLoaded)




// passenger1Name = `${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}`
// passenger1Phone = ride[0].passengerDetails.phoneNumber
// passenger1NumberOfPassengers = ride[0].numberOfPassengers
// passenger1PickupAddressLine1 = ride[0].pickupLocation.address
// passenger1PickupAddressLine2 = `${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}`
// passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address
// passenger1DropoffAddressLine2 = `${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}`

// if (ride.length > 1) {
//   passenger2Name = `${ride[1].passengerDetails.first} ${ride[1].passengerDetails.last}`
//   passenger2Phone = ride[1].passengerDetails.phoneNumber
//   passenger2NumberOfPassengers = ride[1].numberOfPassengers
//   passenger2PickupAddressLine1 = ride[1].pickupLocation.address
//   passenger2PickupAddressLine2 = `${ride[1].pickupLocation.city}, ${ride[1].pickupLocation.state} ${ride[1].pickupLocation.zip}`
//   passenger2DropoffAddressLine1 = ride[1].dropoffLocation.address
//   passenger2DropoffAddressLine2 = `${ride[1].dropoffLocation.city}, ${ride[1].dropoffLocation.state} ${ride[1].dropoffLocation.zip}`

// }
// if (ride.length > 2) {
//   passenger3Name = `${ride[2].passengerDetails.first} ${ride[2].passengerDetails.last}`
//   passenger3Phone = ride[2].passengerDetails.phoneNumber
//   passenger3NumberOfPassengers = ride[2].numberOfPassengers
//   passenger3PickupAddressLine1 = ride[2].pickupLocation.address
//   passenger3PickupAddressLine2 = `${ride[2].pickupLocation.city}, ${ride[2].pickupLocation.state} ${ride[2].pickupLocation.zip}`
//   passenger3DropoffAddressLine1 = ride[2].dropoffLocation.address
//   passenger3DropoffAddressLine2 = `${ride[2].dropoffLocation.city}, ${ride[2].dropoffLocation.state} ${ride[2].dropoffLocation.zip}`
// }
