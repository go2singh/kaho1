/*import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const engs = [
        { id: 1, title: 'Karnataka', description: 'Karnataka', tagline: 'Karnataka' },
        { id: 2, title: 'state-2', description: 'eng-2', tagline: 'eng-2' },
        { id: 3, title: 'state-3', description: 'eng-3', tagline: 'eng-3'  },
        { id: 4, title: 'state-4', description: 'eng-4', tagline: 'eng-4'  },
        { id: 5, title: 'state-5', description: 'eng-5', tagline: 'eng-5'  },
        { id: 6, title: 'state-6', description: 'eng-6', tagline: 'eng-6'  },
        { id: 7, title: 'state-7', description: 'eng-7', tagline: 'eng-7'  },
        { id: 8, title: 'state-8', description: 'eng-8', tagline: 'eng-8'  },
        { id: 9, title: 'state-9', description: 'eng-9', tagline: 'eng-9'  },
        { id: 10, title: 'state-10', description: 'eng-10', tagline: 'eng-10'}
     ];
    return {engs};
  }}
*/


import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const engs = [
        { id: 1, title: 'Andhra Pradesh' },
        { id: 2, title: 'Arunachal Pradesh' },
        { id: 3, title: 'Assam' },
        { id: 4, title: 'Bihar' },
        { id: 5, title: 'Chhattisgarh' },
        { id: 6, title: 'Goa' },
        { id: 7, title: 'Gujarat' },
        { id: 8, title: 'Haryana' },
        { id: 9, title: 'Himachal Pradesh' },
        { id: 10, title: 'Jammu and Kashmir' },
        { id: 11, title: 'Jharkhand' },
        { id: 12, title: 'Karnataka' },
        { id: 13, title: 'Kerala' },
        { id: 14, title: 'Madhya Pradesh' },
        { id: 15, title: 'Maharashtra' },
        { id: 16, title: 'Manipur' },
        { id: 17, title: 'Meghalaya' },
        { id: 18, title: 'Mizoram' },
        { id: 19, title: 'Nagaland' },
        { id: 20, title: 'Odisha' },
        { id: 21, title: 'Punjab' },
        { id: 22, title: 'Rajasthan' },
        { id: 23, title: 'Sikkim' },
        { id: 24, title: 'Tamil Nadu' },
        { id: 25, title: 'Telangana' },
        { id: 26, title: 'Tripura' },
        { id: 27, title: 'Uttar Pradesh' },
        { id: 28, title: 'Uttarakhand' },
        { id: 29, title: 'West Bengal' },
        { id: 30, title: 'Andaman and Nicobar Islands (UT)' },
        { id: 31, title: 'Chandigarh (UT)' },
        { id: 32, title: 'Dadar and Nagar Haveli (UT)' },
        { id: 33, title: 'Daman and Diu (UT)' },
        { id: 34, title: 'Delhi (UT)' },
        { id: 35, title: 'Lakshadweep (UT)' },
        { id: 36, title: 'Puducherry (Pondicherry) (UT)' }
     ];
     const city = [
      { id: 1, title: 'Bangalore', state: 'Karnataka'},
      { id: 2, title: 'Delhi', state: 'Delhi'},
      { id: 3, title: 'Mumbai', state: 'Maharastra'},
      { id: 4, title: 'Bangalore', state: 'Karnataka'},
      { id: 5, title: 'Delhi', state: 'Delhi'},
      { id: 6, title: 'Mumbai', state: 'Maharastra'},
      { id: 7, title: 'Bangalore', state: 'Karnataka'},
      { id: 8, title: 'Delhi', state: 'Delhi'},
      { id: 9, title: 'Mumbai', state: 'Maharastra'},
      { id: 10, title: 'Bangalore', state: 'Karnataka'},
      { id: 11, title: 'Delhi', state: 'Delhi'},
      { id: 12, title: 'Mumbai', state: 'Maharastra'},
      { id: 13, title: 'Bangalore', state: 'Karnataka'},
      { id: 14, title: 'Delhi', state: 'Delhi'},
      { id: 15, title: 'Mumbai', state: 'Maharastra'},
      { id: 16, title: 'Bangalore', state: 'Karnataka'},
      { id: 17, title: 'Delhi', state: 'Delhi'},
      { id: 18, title: 'Mumbai', state: 'Maharastra'},
      { id: 19, title: 'Bangalore', state: 'Karnataka'},
      { id: 20, title: 'Delhi', state: 'Delhi'},
      { id: 21, title: 'Mumbai', state: 'Maharastra'},
      { id: 22, title: 'Bangalore', state: 'Karnataka'},
      { id: 23, title: 'Delhi', state: 'Delhi'},
      { id: 24, title: 'Mumbai', state: 'Maharastra'},
      { id: 25, title: 'Pune', state: 'Maharastra'}
   ];
    return { engs, city };
    }
}
