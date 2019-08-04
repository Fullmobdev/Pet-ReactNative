export default [{ 
  id: 'age',
  header: `I’m looking for a\ndog that is`,
  subheader: true,
  multiple: true,
  options: [{
    value: 0,
    label: 'Puppy',
    labelSlim: '(8 weeks to 6 months)'
  }, {
    value: 1,
    label: 'Older puppy',
    labelSlim: '(6 months to 1 yr)',
  }, {
    value: 2,
    label: 'Young',
    labelSlim: '(1 to 3 yrs)',
  }, {
    value: 3,
    label: 'Adult',
    labelSlim: '(3 to 7 yrs)',
  }, {
    value: 4,
    label: 'Senior',
    labelSlim: '(7+ yrs)',
  }]
}, {
  id: 'sex',
  header: 'I prefer a dog\nthat is',
  subheader: true,
  multiple: true,
  options: [{
    value: 0,
    label: 'Male',
  }, {
    value: 1,
    label: 'Female',
  }, {
    value: 2,
    label: 'No Preference',
  }]
}, {
  id: 'size',
  header: 'Fully grown, my\ndog should be',
  subheader: true,
  multiple: true,
  options: [{
    value: 0,
    label: 'Extra Small',
    labelSlim: '(under 10 lbs)'
  }, {
    value: 1,
    label: 'Small',
    labelSlim: '(10-20 lbs)'
  }, {
    value: 2,
    label: 'Medium',
    labelSlim: '(20-45 lbs)'
  }, {
    value: 3,
    label: 'Large',
    labelSlim: '(45-60 lbs)'
  }, {
    value: 4,
    label: 'Extra Large',
    labelSlim: '(60-90 lbs)'
  }, {
    value: 5,
    label: 'Huge',
    labelSlim: '(90+ lbs)'
  }]
}, {
  id: 'hair',
  header: 'Fully grown, my\ndog should be',
  subheader: true,
  multiple: true,
  options: [{
    value: 0,
    label: 'Short hair',
  }, {
    value: 1,
    label: 'Long hair',
  }, {
    value: 2,
    label: 'Hypoallergenic',
  }]
}, {
  id: 'energy',
  header: 'I’m looking for a\ndog that is',
  subheader: true,
  multiple: true,
  options: [{
    value: 0,
    label: 'a snuggle buddy',
  }, {
    value: 1,
    label: 'a couch potato',
  }, {
    value: 2,
    label: 'the life of the party',
  },{
    value: 3,
    label: 'a running / hiking partner',
  }, {
    value: 4,
    label: 'a hunting buddy',
  }, {
    value: 5,
    label: 'agility/tracking/herding',
  }, {
    value: 6,
    label: 'a therapy dog (or could be)',
  }, {
    value: 7,
    label: 'I’m not sure yet',
  }]
}, {
  id: 'breed',
  header: 'Breed is\nimportant to me',
  subheader: false,
  multiple: false,
  options: [{
    value: 0,
    label: 'Yes, breed is important',
  }, {
    value: 1,
    label: 'No, I love all dogs!',
  }]
}, {
  id: 'breed2',
  header: 'I’m looking for a\ndog that is',
  subheader: true,
  multiple: true,
  options: [{
    value: 0,
    label: 'Toy',
    labelSlim: '(Pug, Chihuahua, Shih Tzu, Miniture Pinture)',
  }, {
    value: 1,
    label: 'Terrier',
    labelSlim: '(Airdale, Staffordshire, Pitbull)'
  }, {
    value: 2,
    label: 'Sporting',
    labelSlim: '(Spaniel, Setter, Retriever, Weinereimer, Pointers)'
  },{
    value: 3,
    label: 'Non-Sporting',
    labelSlim: '(Bulldog, Shar-Pei, Boston Terrier, Dalmation, Chow-Chow, French Bulldog, Shibu Inu)'
  }, {
    value: 4,
    label: 'Herding',
    labelSlim: '(Cattle Dog, Australian Shepherd, Belgian Malinois, Collie)'
  }, {
    value: 5,
    label: 'Hounds',
    labelSlim: '(Beagle, Dachshund, Greyhound, Foxhound, Bloodhound)'
  }, {
    value: 6,
    label: 'Working',
    labelSlim: '(Akita, Malamute, Bernese Mountain Dog, Boxer, Doberman, Great Dane, Newfoundland, Rottweiller, Husky, Schnauzer)'
  }]
}, {
  id: 'special_needs',
  header: 'I am willing to\nconsider a dog\nwith special needs',
  subheader: true,
  multiple: true,
  next: 'account',
  options: [{
    value: 0,
    label: 'a senior dog',
  }, {
    value: 1,
    label: 'medical needs',
  }, {
    value: 2,
    label: 'behavioral challenges',
  }, {
    value: 3,
    label: 'not at this time',
  }]
}];