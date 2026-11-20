const cities = {
  Lucknow: ['Gomti Nagar','Indira Nagar','Aliganj','Hazratganj','Jankipuram','Sushant Golf City','Vikas Nagar','Mahanagar'],
  Varanasi: ['Lanka','Sigra','Mahmoorganj','Bhelupur','Shivpur','Assi'],
  Gorakhpur: ['Golghar','Taramandal','Medical College Road','Basharatpur','Rustampur'],
  Delhi: ['Dwarka','Rohini','Saket','Laxmi Nagar','Uttam Nagar','Janakpuri'],
  Noida: ['Sector 62','Sector 18','Sector 137','Sector 50','Sector 76'],
  Prayagraj: ['Civil Lines','George Town','Naini'], Kanpur: ['Swaroop Nagar','Kakadeo','Kalyanpur','Kidwai Nagar'], Jaipur: ['Vaishali Nagar','Mansarovar','Malviya Nagar']
};
const photos = [
  'photo-1600210492486-724fe5c67fb0','photo-1600607687939-ce8a6c25118c','photo-1600566753086-00f18fb6b3ea','photo-1600607687920-4e2a09cf159d','photo-1600566753190-17f0baa2a6c3','photo-1600607687644-c7171b42498f','photo-1600210491892-03d54c0aaf87','photo-1600566752355-35792bedcfea'
];
const rentBase = {Lucknow:8500,Varanasi:7500,Gorakhpur:4500,Delhi:14500,Noida:12500,Prayagraj:6500,Kanpur:6000,Jaipur:7500};
const titleStyles = ['Sunlit home with a leafy balcony','A calm, considered city home','Freshly updated family apartment','A bright home near everything','Thoughtful living in the heart of the city','Room to settle in and make your own'];
const descriptions = ['A welcoming, light-filled home with a practical layout, thoughtful details and easy access to everyday essentials.','Set on a quiet residential street, this well-kept home offers generous natural light and a comfortable flow between living spaces.','A beautifully maintained home with a relaxed feel, useful storage and nearby shops, parks and public transport.'];
let index = 0;
export const properties = Object.entries(cities).flatMap(([city, areas]) => areas.map((locality, n) => {
  const i = index++, bhk = [1,2,2,3,1,2,3,2][n % 8], rent = rentBase[city] + ((n * 1300 + i * 180) % 6500);
  const type = ['Apartment','Independent House','Studio','Apartment','Room'][i % 5];
  return { id:`sample-${i+1}`, title:titleStyles[i%titleStyles.length], city, locality, address:`${12+n}, ${locality}, ${city}`, monthlyRent:rent, propertyType:type, bhk, bathrooms:bhk===1?1:bhk-1, area:520+((i*97)%920), furnishing:['Semi-Furnished','Furnished','Unfurnished'][i%3], floor:`${(i%9)+1}${i%9===0?'st':i%9===1?'nd':i%9===2?'rd':'th'} floor`, parking:i%3!==0, amenities:['Balcony','Gated community','Power backup','Lift','Water supply'].filter((_,j)=>(i+j)%2===0).slice(0,3), description:descriptions[i%descriptions.length], images:[0,1,2].map((j)=>`https://images.unsplash.com/${photos[(i+j)%photos.length]}?auto=format&fit=crop&w=1400&q=85`), ownerName:['Aarav Sharma','Meera Kapoor','Rohan Verma','Ananya Singh'][i%4], ownerPhone:'+91 98765 43210', availableFrom:`2026-${String(6+(i%6)).padStart(2,'0')}-01`, featured:i%7===0, createdAt:new Date(2026,9-(i%5),20-i).toISOString(), status:'Active', ownerId:i%8===0?'demo-owner':'sample-owner'
};
}));
export const cityNames = Object.keys(cities);
export const cityInfo = [
  ['Lucknow','A city of graceful heritage and an easy, modern rhythm.'],['Varanasi','Riverside living in one of India’s most storied cities.'],['Gorakhpur','Find a welcoming home in a fast-growing regional hub.'],['Delhi','A neighbourhood for every pace of life.'],['Noida','Contemporary homes, connected to the capital.'],['Prayagraj','A vibrant city with room to put down roots.'],['Kanpur','Everyday convenience meets a rich industrial heritage.'],['Jaipur','A colourful blend of tradition and modern living.']
];
