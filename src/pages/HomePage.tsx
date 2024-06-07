import { DropdownInput } from '../components/DropdownInput';

const namesArr = [
  {
    id: 'd88d9362-86b2-4520-9b99-f2953a025856',
    name: 'Montana',
  },
  {
    id: 'e687506a-d9b9-47dc-bf84-d920ad7859d9',
    name: 'Ena',
  },
  {
    id: 'b94eb094-a47d-46ae-b38a-51651a3cb8da',
    name: 'Bertha',
  },
  {
    id: 'c89b0389-f494-46a0-becb-60330dbba867',
    name: 'Myrtice',
  },
  {
    id: '9843e86f-78c3-47a7-b739-2c4fc6cc9fbf',
    name: 'Junior',
  },
  {
    id: '868438e2-109e-43df-8654-123205fed418',
    name: 'Cassie',
  },
  {
    id: '813aecab-7526-46aa-ba0d-327262b912b5',
    name: 'Laney',
  },
  {
    id: '48f33280-0ec8-412c-a55d-4aaa36c9b3e2',
    name: 'Enrique',
  },
  {
    id: '2a3939d9-4458-471c-80da-906fce0d7a2e',
    name: 'Miller',
  },
  {
    id: '2e4250ff-79f2-4a30-b840-9a115856e692',
    name: 'Josie',
  },
  {
    id: '36a61e8a-9b97-42b1-b158-c84c58c1c1a9',
    name: 'Caleigh',
  },
  {
    id: '4817a368-5044-4b98-98a6-f028daf12179',
    name: 'Wilfred',
  },
  {
    id: '9491e689-e774-4db0-9cc7-2e62a386b4eb',
    name: 'Chauncey',
  },
  {
    id: 'e2b0874c-6039-4aa8-a882-f8abd07ccdbb',
    name: 'Vesta',
  },
  {
    id: '43787640-99dd-4272-98f9-d492bd6782f7',
    name: 'Toy',
  },
  {
    id: '54076d4c-63c0-4a2b-bd29-5f817b8780ee',
    name: 'Camryn',
  },
  {
    id: '07fb8fda-75b7-44e4-8377-9abe6868237c',
    name: 'Holden',
  },
  {
    id: '2e41300b-603e-4fa0-b4f6-e47cf3eab38d',
    name: 'Emilia',
  },
  {
    id: '9a990c7d-1825-45cd-bb41-bd975ff8e65e',
    name: 'Coleman',
  },
  {
    id: '7fe0dbab-ef94-47df-afda-3599a4cd94c1',
    name: 'Marian',
  },
  {
    id: '67bd8cc0-3261-4d6e-ab33-3a81cddf093f',
    name: 'Maureen',
  },
  {
    id: '6bc31af4-da18-4794-9c49-a03263d04471',
    name: 'Mckayla',
  },
  {
    id: '3d942d72-20e7-4ade-98ff-5b62b595f21d',
    name: 'Raquel',
  },
  {
    id: '569ade3b-e957-40db-82d9-c642227c8afe',
    name: 'Ardella',
  },
  {
    id: '58397be5-7641-41bc-a440-99c02990a0aa',
    name: 'Blanche',
  },
  {
    id: 'd4581d5a-26a7-4903-b422-87a1f4d73ca6',
    name: 'Duncan',
  },
  {
    id: '2aa9c1ef-8a94-4810-8e9b-6e8e043394a5',
    name: 'Foster',
  },
  {
    id: 'cabbf040-344d-41b9-a526-b2285e11e459',
    name: 'Abdiel',
  },
  {
    id: '4df38af6-4e4b-4e0d-8ecf-9c6f35559d3a',
    name: 'Kaela',
  },
  {
    id: '5fe330fd-b154-4f14-9fc1-6d309ba4be55',
    name: 'Ebony',
  },
  {
    id: '77fc8e52-f376-416e-bd0c-17a69c4652e8',
    name: 'Margarete',
  },
  {
    id: 'e2a59c9e-0fea-42eb-81c5-7ef10b38267b',
    name: 'Fernando',
  },
  {
    id: '58f06b8e-0adc-49e1-ae0b-4a0c9a4c58d9',
    name: 'Tatum',
  },
  {
    id: 'a90671d3-8f44-44bf-a77a-05e2431dc505',
    name: 'Natasha',
  },
  {
    id: '7db20f49-4b61-4cfa-bc15-b1da0b50554a',
    name: 'Kole',
  },
  {
    id: '4b68b11a-b686-4133-802b-0cce49416380',
    name: 'Lisette',
  },
  {
    id: '6f94414f-cce4-4e23-bbcb-d9c1f5494643',
    name: 'Charley',
  },
  {
    id: '05bdafb5-15b3-44ad-8a6d-f771822e58e4',
    name: 'Bailee',
  },
  {
    id: '53a92531-cd64-437d-8c14-eff92427a031',
    name: 'Hipolito',
  },
  {
    id: '7f11ac44-290c-4873-907d-cb0406351616',
    name: 'Shanon',
  },
  {
    id: 'b7e0317b-2400-4e1b-9943-0819580ec919',
    name: 'Rylee',
  },
  {
    id: '331865cd-1055-41e5-a4aa-d99d740972ec',
    name: 'Arnulfo',
  },
  {
    id: '838261ae-e2a3-48f0-ac77-0787c694dd14',
    name: 'Delphine',
  },
  {
    id: 'cfbab3d9-d8b4-421e-b22a-ef3275e55c73',
    name: 'Elvera',
  },
  {
    id: '0254d159-1011-4c74-917b-6bc3a1fa3fe2',
    name: 'Olaf',
  },
  {
    id: '5c16116c-5c2d-48dc-be4b-43c75059a6bd',
    name: 'Jameson',
  },
  {
    id: 'a551cac1-58bb-4e8a-b401-94f6af59450e',
    name: 'Alexandrea',
  },
  {
    id: '3054da56-f478-4ab2-8f06-69e6387e217d',
    name: 'Maia',
  },
  {
    id: '0f0da291-2708-43f5-8342-a69f5ad78d69',
    name: 'Abigail',
  },
  {
    id: 'e47d2e00-c537-47f4-aac2-018dab669e96',
    name: 'Catalina',
  },
  {
    id: '6d46b8cb-1abb-44c0-9106-c5ee2afc1540',
    name: 'Sammy',
  },
  {
    id: 'f5edefee-9a60-4653-ad4d-a948cfde7353',
    name: 'Lester',
  },
  {
    id: 'f6918b8a-1727-4663-a977-5becd6558387',
    name: 'Myrtle',
  },
  {
    id: '4d4c1da6-9ff3-4f1d-ae65-b67b51c48f8c',
    name: 'Arthur',
  },
  {
    id: '52b534fb-b220-48b5-bf96-0d773ca27d2b',
    name: 'Jessika',
  },
  {
    id: '50993066-e486-491b-a5ff-8584de246e80',
    name: 'Destinee',
  },
  {
    id: '056b824c-dd1a-43b2-9309-c829e43367b7',
    name: 'Sedrick',
  },
  {
    id: '2f8f5e77-5dc8-4608-a4ff-4a3fc7d1c6a3',
    name: 'Earlene',
  },
  {
    id: '0fb5721e-1797-4151-b941-ef611a8d95a2',
    name: 'Fiona',
  },
  {
    id: '9281e30c-7f33-4af0-91fb-5105e57dedd8',
    name: 'Joan',
  },
  {
    id: '8acb6725-be14-4f09-883a-2844464cbd07',
    name: 'Sonya',
  },
  {
    id: '1d361082-7d87-4e03-a77c-b4e523efbb6d',
    name: 'Donnie',
  },
  {
    id: '0e654d59-61fe-4b11-b4c9-a4a75eb6d41d',
    name: 'Orie',
  },
  {
    id: '642a60a2-144e-4b81-a111-a342a19c6d4d',
    name: 'Micheal',
  },
  {
    id: '90666b62-557b-4144-857c-8d5286c8c62b',
    name: 'Glennie',
  },
  {
    id: '445b85a5-6f28-4515-8985-0aa548afb669',
    name: 'Yasmin',
  },
  {
    id: 'a2d7eb55-4bee-4178-9020-4c6f1cfa3e3b',
    name: 'Kurtis',
  },
  {
    id: '7f128195-ff4b-4a3d-9f15-363b27388013',
    name: 'Lela',
  },
  {
    id: '5cea15d9-0594-4361-a075-900af7996e54',
    name: 'Madge',
  },
  {
    id: 'd8af193a-8c69-4bc0-bc39-dd0407b6c02a',
    name: 'William',
  },
  {
    id: 'eef9b5e7-3b4d-43dd-b9ac-b99b39bbc680',
    name: 'Amie',
  },
  {
    id: 'be65d8e7-4fd5-47e8-a015-50416d63975b',
    name: 'Otis',
  },
  {
    id: '46095d8a-ef9d-4fc1-ba0d-6a010ebef586',
    name: 'Jason',
  },
  {
    id: '85f74604-d4b8-4db5-920e-018982699fce',
    name: 'Aiden',
  },
  {
    id: 'e2c5cbc8-62f7-45b1-89d0-1db1a24de0fa',
    name: 'Johathan',
  },
  {
    id: 'e37420f9-0c61-4e98-89f7-988032327939',
    name: 'Michele',
  },
  {
    id: '25da4286-4859-4383-a6e6-5529c0e9f5bc',
    name: 'Tianna',
  },
  {
    id: '1e1bfcc8-44df-48cd-bea4-9d1f6b3d0afa',
    name: 'Claude',
  },
  {
    id: '7ea49cdf-14fd-4ec1-b4d8-994d0255c3dd',
    name: 'Ayden',
  },
  {
    id: '709cac19-2c68-4a24-93cb-cdbfda9a58d0',
    name: 'Cristobal',
  },
  {
    id: '27b404a5-f98d-4a5a-9b47-d0b51cb2af98',
    name: 'Margaretta',
  },
  {
    id: '0d994fa7-1b47-449c-8a7d-54d0ec98083b',
    name: 'Katelyn',
  },
  {
    id: '4dee47bd-9c8a-4a86-a4da-f6868d05a16f',
    name: 'Bennie',
  },
  {
    id: 'ba29c306-3476-476e-9a3a-7cae1bc42ad4',
    name: 'Emily',
  },
  {
    id: '9fe7cd08-1e07-4152-9d7f-3408352e91a6',
    name: 'Peggie',
  },
  {
    id: '84551abb-e0e2-41ae-a0d5-521e5c8ae464',
    name: 'Amos',
  },
  {
    id: '828cf82d-b859-4f42-9fab-9e469414143f',
    name: 'Nakia',
  },
  {
    id: '81d803cd-064f-40da-902b-81c88714bf03',
    name: 'Lynn',
  },
  {
    id: 'b42cace7-efcd-4dea-a10c-abf37a24fca2',
    name: 'Pearline',
  },
  {
    id: '98293355-0a4f-4d95-836d-7517895915da',
    name: 'Karina',
  },
  {
    id: '19ca649a-9cfe-43f6-9376-ad0ebe3d4dc4',
    name: 'Reagan',
  },
  {
    id: '802d579b-eed7-4448-a55b-81e365ee5a4a',
    name: 'Sheridan',
  },
  {
    id: 'e6f59576-d71e-430e-80a8-f6fe4d9b3ca0',
    name: 'Ida',
  },
  {
    id: 'd9c45da1-5284-417d-8e60-436dcfcf7d75',
    name: 'Marcelina',
  },
  {
    id: 'd86cafce-1f61-4797-8046-568e9a0b86c6',
    name: 'Lurline',
  },
  {
    id: '81a437d0-7894-49d6-8060-03d66dc9eefe',
    name: 'Everett',
  },
  {
    id: 'e935cf64-14a6-4f4e-aaf9-dd2b5fc89a41',
    name: 'Maybelle',
  },
  {
    id: '8783bda3-107a-4225-a6f3-dd675dd1213f',
    name: 'Douglas',
  },
  {
    id: 'be0da047-d1e2-492e-a676-3400aaa71c0d',
    name: 'Dee',
  },
  {
    id: '20c560ef-8735-4fdb-ab0d-fce1aee9a22d',
    name: 'Elisa',
  },
  {
    id: '9c6d76b5-0836-454b-8bb1-5d1920cdafcc',
    name: 'Dejah',
  },
  {
    id: '0cf74ddc-c40e-4eb5-a880-6abac6bb7e62',
    name: 'Jaiden',
  },
  {
    id: '2b567e10-7e6e-4e80-8dbd-de49592a55a9',
    name: 'Josh',
  },
  {
    id: '39acd678-0f99-4536-97f2-4350b4a6a13a',
    name: 'Jonas',
  },
  {
    id: '61d9151b-8738-43ab-93a7-2af23bb0713d',
    name: 'Jazmin',
  },
  {
    id: '334cea9b-1a15-4841-ab74-bd6c14684d0c',
    name: 'Lonzo',
  },
  {
    id: 'be8830ea-a566-4e8e-8ac6-9acebf5d3aac',
    name: 'Angelita',
  },
  {
    id: '00ccc478-4085-4df5-96a2-0625a307c3e6',
    name: 'Haley',
  },
  {
    id: 'd8c8f32a-f897-40c2-b003-d08233feaf16',
    name: 'Alan',
  },
  {
    id: 'c4c2fdd7-84c1-402b-8da1-1b1faaf65cb5',
    name: 'Jude',
  },
  {
    id: '0b4996a3-d8ea-4235-9080-a0ea658a26b7',
    name: 'Lera',
  },
  {
    id: 'a5ad1e04-c026-436b-80c7-1428a8871b87',
    name: 'Jamar',
  },
  {
    id: '39f293e5-7bb7-41ad-add2-1db6268f9c6f',
    name: 'Erin',
  },
  {
    id: '35f0792a-d7ba-4378-a124-64727fb00b0d',
    name: 'Willy',
  },
  {
    id: 'dfcbb9a8-d769-42eb-aa9f-4ebf3a46d68f',
    name: 'Ted',
  },
  {
    id: 'b5d9029a-38de-467d-914b-f4c4e558b10d',
    name: 'Larue',
  },
  {
    id: '1433e001-9609-49a1-85db-4a7e1df96e2c',
    name: 'Larue',
  },
  {
    id: 'efdf5411-6acd-43e5-92a6-cc1630bac8fe',
    name: 'Nikki',
  },
  {
    id: 'dec91d0f-8e5c-4aa1-9fe4-71236cb9cb78',
    name: 'Erica',
  },
  {
    id: '62b16000-5fdd-4de4-a6d9-ec477b3eee07',
    name: 'Rico',
  },
  {
    id: 'd3727245-fc55-4334-8335-cd92f8052b43',
    name: 'Ervin',
  },
  {
    id: 'aa2c3240-dca1-4d3a-8fce-0f7b0040552a',
    name: 'Orie',
  },
  {
    id: '5d4da13d-707a-4293-94b9-3367966686f9',
    name: 'Daija',
  },
  {
    id: '47004144-a4ee-4ef4-8bd6-1560d6df25da',
    name: 'Weston',
  },
  {
    id: 'e1a322b6-5fb9-4b43-b126-164172620a06',
    name: 'Daphnee',
  },
  {
    id: 'ad3dc0bc-df9f-47db-b536-8a4fc787de16',
    name: 'Ona',
  },
  {
    id: '8766c9a0-4ff7-4972-8ac6-c9e2de384729',
    name: 'Jalon',
  },
  {
    id: 'a86cbfec-9f83-4251-923b-9342917befc8',
    name: 'Kim',
  },
  {
    id: '6653e235-69b6-4a47-bbcd-5432196d81a7',
    name: 'Kali',
  },
  {
    id: 'ed596667-a09f-4280-afcd-3e113420d22e',
    name: 'George',
  },
  {
    id: 'b0f486da-7a1b-43e1-a06a-e5f5abf66058',
    name: 'Jettie',
  },
  {
    id: '0457a5cc-dad3-43ce-b8af-7e7cb8268599',
    name: 'Hayley',
  },
  {
    id: '01f991c1-783c-4c77-bdc5-b46eb11c1960',
    name: 'Alda',
  },
  {
    id: '93a5cc10-81da-4652-9a99-7fb93f869695',
    name: 'Reuben',
  },
  {
    id: '00856e6d-2b47-443a-83e2-6d23ad15a3f0',
    name: 'Jimmy',
  },
  {
    id: 'f677eea4-918e-4155-bff1-a50751c9bc6f',
    name: 'Maximus',
  },
  {
    id: 'f83c60fb-c413-4e1e-af27-9c19c6a8dd23',
    name: 'Zakary',
  },
  {
    id: '15e48787-3565-47ac-b022-f131e4a2fa4a',
    name: 'Shea',
  },
  {
    id: '4ab6b40b-c165-4918-a045-795fa80e73fc',
    name: 'Felipa',
  },
  {
    id: 'eabbe31f-5ab0-4475-8554-b13a47c26772',
    name: 'Greyson',
  },
  {
    id: '86fd738b-cfdb-469a-b80e-6b9a43884184',
    name: 'Brisa',
  },
  {
    id: 'f3b7e065-8823-463e-8891-8b0cf335158b',
    name: 'Maddison',
  },
  {
    id: 'af0eab58-d4fe-4fd9-beb2-8a671dab0abf',
    name: 'Lois',
  },
  {
    id: 'c5d52e4d-e2db-4fb0-b5e6-c1bdabac703e',
    name: 'Mackenzie',
  },
  {
    id: 'e22b8d3f-eaaa-47ac-984a-38ffc00940da',
    name: 'Noemie',
  },
  {
    id: 'ad28989f-e0b1-47f2-8bea-c45cee3fbf53',
    name: 'Rhiannon',
  },
  {
    id: '40dc31ef-1a6f-40ce-8bb4-ebf4e2c5b722',
    name: 'Sammy',
  },
  {
    id: '06cfac55-0c83-4e06-9bec-983b3ea944c1',
    name: 'Samantha',
  },
  {
    id: '9f53562e-f76c-45b5-9914-fca39339b8b3',
    name: 'Anika',
  },
  {
    id: 'c5cbee25-3bfc-4558-a509-2f3c55718084',
    name: 'Taurean',
  },
  {
    id: '3928d939-90cf-4724-97d7-909fbf972a8f',
    name: 'Hosea',
  },
  {
    id: '3e48ae10-128e-4d92-abbe-a39a2087d6ee',
    name: 'Josiane',
  },
  {
    id: '9c1518d9-591d-4876-86c3-94c8cc6e9995',
    name: 'Emilie',
  },
  {
    id: '4765c07a-05c0-4c7b-820a-844fc7281c05',
    name: 'Zachary',
  },
  {
    id: '618787fe-340c-44d6-9767-85ab6e2db1d0',
    name: 'Maxie',
  },
  {
    id: 'e977ef04-ed71-4877-bc8b-e4384b595786',
    name: 'Leone',
  },
  {
    id: '375c93c2-bb6f-4b1d-9aa5-1c73dbf354b2',
    name: 'Lennie',
  },
  {
    id: '217d96f2-641f-4a64-8a7e-214e555930df',
    name: 'Therese',
  },
  {
    id: 'd89c9e2c-35b4-4c4a-a5c6-f452360aa87c',
    name: 'Enoch',
  },
  {
    id: 'd286174e-ea78-4e13-821f-12055500d0b3',
    name: 'Edward',
  },
  {
    id: 'e2f31a62-d6ac-4db8-ad1f-447f21e6ece8',
    name: 'Eulalia',
  },
  {
    id: '95551b1d-c195-4620-9567-3028d218d968',
    name: 'Jayce',
  },
  {
    id: '2de409fe-fd0d-4699-af9c-b6e23433f673',
    name: 'Sadie',
  },
  {
    id: 'b456d292-d3b9-43f7-abef-9dc5e36182f6',
    name: 'Susan',
  },
  {
    id: '0c797d6d-df3b-489e-97b2-34a370eefd69',
    name: 'Mose',
  },
  {
    id: '68ea0388-4021-47d6-9362-4ce3743d5d3a',
    name: 'Blake',
  },
  {
    id: 'b0ff6a1b-a470-41c2-9ab1-cd56947ee629',
    name: 'Fay',
  },
  {
    id: 'd91efdc1-f8d6-483e-8772-163aa2dcf00e',
    name: 'Alana',
  },
  {
    id: 'c2c23756-d88b-4339-a781-8c26cfad6fbf',
    name: 'Iva',
  },
  {
    id: '1879422d-c05c-4054-9872-6c62b83bafef',
    name: 'Jocelyn',
  },
  {
    id: '20d7a032-acb1-44ba-9e9f-abcc3a5e3474',
    name: 'Bernhard',
  },
  {
    id: '22e3e30d-2edb-4934-a6d3-3856f667bbe7',
    name: 'Boris',
  },
  {
    id: 'fc463d59-6306-4540-b11e-7a641da1eea2',
    name: 'Gilberto',
  },
  {
    id: '1c62cf40-8f8b-4960-a4b7-05871a58217d',
    name: 'Declan',
  },
  {
    id: '106732d0-c373-4ccb-8e4e-f2d3d0298d24',
    name: 'Deon',
  },
  {
    id: '60113745-5913-4def-ac6b-b8348a4268f4',
    name: 'Brenna',
  },
  {
    id: '9949dc8a-bcbf-42b4-9be8-99ccdcf68d0f',
    name: 'Jamir',
  },
  {
    id: '6b06447a-a239-4536-8add-df402dca399c',
    name: 'Zita',
  },
  {
    id: '0ce2772b-00dd-4fb5-80f9-80180ef48f0f',
    name: 'Victor',
  },
  {
    id: '62922b79-e7fd-42d2-aafc-6af3ce993550',
    name: 'Ophelia',
  },
  {
    id: '216c4418-4f90-4b12-bb5c-e7aac663e166',
    name: 'Weldon',
  },
  {
    id: '23b811d2-509c-45c6-9f56-d34add5676f7',
    name: 'Alycia',
  },
  {
    id: '22f300cf-5386-4928-a080-6ae205902540',
    name: 'Tillman',
  },
  {
    id: 'f977b104-7e3f-439a-a058-215c081108f5',
    name: 'Reid',
  },
  {
    id: '9c066b08-e753-46af-bc68-b9519ab44203',
    name: 'Edmond',
  },
  {
    id: '00177f60-753b-4838-9adf-d0cce38d078a',
    name: 'Kacey',
  },
  {
    id: 'bf8bd6b3-b45e-418f-8804-44d081e83d4d',
    name: 'Emerson',
  },
  {
    id: '55c499ff-953e-458e-b164-dcaa1abce0cb',
    name: 'Hilbert',
  },
  {
    id: 'd7ed9723-ca14-41b2-8130-cf73532e1933',
    name: 'Addie',
  },
  {
    id: '7ff386f1-6995-4240-a9fd-1d147d10b76c',
    name: 'Bulah',
  },
  {
    id: '58d4b336-14ad-468e-b728-bd91a9f8b5d7',
    name: 'Cornelius',
  },
  {
    id: 'fc0172d4-f380-4157-9786-497d077d6aee',
    name: 'Dale',
  },
  {
    id: '9da0e870-dad6-4304-9cff-88e1d434b2cb',
    name: 'Easton',
  },
  {
    id: '51359e4d-a31b-4449-8dc8-f1b4f4486fbb',
    name: 'Alison',
  },
  {
    id: 'e2c7a3ac-8611-4efc-b64c-9686ad88ded5',
    name: 'Serena',
  },
  {
    id: 'fb1c3a6b-17f5-41fa-adbe-0fc6faf53785',
    name: 'Leila',
  },
  {
    id: '4c0eb11e-ab39-4fb5-a446-c8e6f5ff95f2',
    name: 'Kenyatta',
  },
  {
    id: '91cf1ebd-dfa9-4569-b417-5fb457179dc5',
    name: 'Velva',
  },
  {
    id: '8909842c-6d64-471c-9c2e-c96aa0657520',
    name: 'Maximilian',
  },
  {
    id: '58f3d860-e50a-4a1e-aab4-e84d1ae639ae',
    name: 'Kenyatta',
  },
  {
    id: '3e056942-fb72-49bc-a331-a40e36e486db',
    name: 'Ross',
  },
  {
    id: 'd429a5ee-cb90-4370-ac09-fcaf5dcd3fb7',
    name: 'Aurelie',
  },
  {
    id: 'e02839ca-c4c6-42a3-b724-9c259048f539',
    name: 'Adriana',
  },
  {
    id: '35e8af69-0f36-492b-94fc-67805ea721bc',
    name: 'Elvera',
  },
  {
    id: '074496b2-2d13-48a3-b681-5ed7a36339fb',
    name: 'Marjory',
  },
  {
    id: 'a00a45d6-1416-4907-b431-5f75acc49e09',
    name: 'Gus',
  },
  {
    id: '3b473bae-321d-4938-b8ba-d6bdd20e2833',
    name: 'Jennings',
  },
  {
    id: '3e3de292-b4aa-4954-999b-ca50f72f9547',
    name: 'Kristofer',
  },
  {
    id: 'd49e526d-6889-4ecd-adce-3476aa3cd832',
    name: 'Velma',
  },
  {
    id: '5a44a8c6-cd1f-4b70-91f1-72e7ccaacb8f',
    name: 'Tommie',
  },
  {
    id: 'cb1afaac-11e1-4ef3-a96d-82977a457cd7',
    name: 'Annabelle',
  },
  {
    id: 'aabc179e-8bc5-4182-a9ad-b62a14ea4113',
    name: 'Shanny',
  },
  {
    id: 'ae1fc5d7-cd6b-4b1b-abe0-2217267930a7',
    name: 'Asha',
  },
  {
    id: '8623688c-57b4-4a1d-ad38-885d4b30fa2f',
    name: 'Perry',
  },
  {
    id: '3c9dc977-55c8-4e32-8fd6-9bcef042fa26',
    name: 'Shannon',
  },
  {
    id: '58f34a7b-6bfb-4aed-8a4e-5474ae2aed91',
    name: 'Tania',
  },
  {
    id: 'c20199c8-0f96-42f8-b19a-dd05ed09ccf5',
    name: 'Deborah',
  },
  {
    id: '87bd8431-4212-4d1e-95b0-9ea36e090390',
    name: 'Kayden',
  },
  {
    id: '3bd0ac93-3ac6-4bb6-b510-a9c87d9c9c07',
    name: 'Lora',
  },
  {
    id: '87838ec7-62d0-4bf9-a86e-b4d949510ecf',
    name: 'Alba',
  },
  {
    id: 'b1c1d4ac-8ff0-4d4a-a0ca-8693578471bb',
    name: 'Westley',
  },
  {
    id: '8112a3da-2052-4fd2-ac55-fc9c05ed8dae',
    name: 'Kim',
  },
  {
    id: 'd7e14a4e-45f0-47ff-b7e1-e938b055b4af',
    name: 'Corene',
  },
  {
    id: '48b29b6d-7196-419e-acca-1344f6ea0ac9',
    name: 'Ellie',
  },
  {
    id: 'ab4c5b10-a2d9-42f1-a3d0-f74ca58c1d67',
    name: 'Samanta',
  },
  {
    id: '6cc5d0b4-3f3a-4e89-b41a-d6f7336eccc1',
    name: 'Eva',
  },
  {
    id: 'd2a926b6-d4e1-4d60-ac91-4293bc200eeb',
    name: 'Douglas',
  },
  {
    id: '49d32b54-339e-4a7e-b9ce-af109346a820',
    name: 'Ross',
  },
  {
    id: 'cf5d5da8-5351-4cd1-a323-27e8df55f196',
    name: 'Barrett',
  },
  {
    id: '53c51b90-3575-495d-a699-327019d0b268',
    name: 'Amelie',
  },
  {
    id: '33392084-9685-4cbf-9226-272495e00a05',
    name: 'Holly',
  },
  {
    id: 'd000876a-4042-44d4-8c10-c7bb0c6741da',
    name: 'Flo',
  },
  {
    id: '8aceae82-0694-48b6-880a-006b0e4733d7',
    name: 'Kristy',
  },
  {
    id: 'de7b69b6-ac58-4c9b-9507-628636c4b51f',
    name: 'Rusty',
  },
  {
    id: '9a7825c2-be88-48b6-8e34-b6f97a741eb4',
    name: 'Rene',
  },
  {
    id: '922bbda5-79e4-4702-b24f-90851a16ea94',
    name: 'Federico',
  },
  {
    id: '1b43295c-feac-4724-84bc-a71a4194f788',
    name: 'Lea',
  },
  {
    id: '6b70220c-6082-4259-a6d1-a9ef9d64a2da',
    name: 'Paige',
  },
  {
    id: 'befb9b29-c86d-4fe1-abd9-5e35264edba2',
    name: 'Anita',
  },
  {
    id: '3e9b9bfb-589a-4b65-a8d4-da0577c4ff7f',
    name: 'Gust',
  },
  {
    id: '5fe29ada-b0be-4fa9-8f8a-39d95dc20272',
    name: 'Charles',
  },
  {
    id: 'f774b0c4-14ef-4e39-935f-6fb216779534',
    name: 'Arnulfo',
  },
  {
    id: 'c0061189-9078-4dfe-9689-5ea962734fa2',
    name: 'Damion',
  },
  {
    id: '89fdb191-a876-489f-b907-91c5c14fda7c',
    name: 'Aniyah',
  },
  {
    id: '9a38ac75-fa2d-4abe-a441-a3e90dea9d13',
    name: 'Adonis',
  },
  {
    id: '8a5784a4-097c-4a93-8ad8-fa117eebb7b4',
    name: 'Mariam',
  },
  {
    id: 'e8e3acb6-b0be-46d4-9f38-b83d923ed75b',
    name: 'Libbie',
  },
  {
    id: '67ea4749-3fb3-497a-aac3-31f4c8f50783',
    name: 'Gabrielle',
  },
  {
    id: '685ab5cf-ddfc-44c5-8e38-de47838cb182',
    name: 'Jody',
  },
  {
    id: '844b63fc-a05d-4ba9-90cc-ac690ca7615f',
    name: 'Alisha',
  },
  {
    id: 'e9de855a-2edb-465f-90ea-f7ffdaa8cedb',
    name: 'Avis',
  },
  {
    id: '3de55f2b-612c-4589-be23-ec28ca885def',
    name: 'Julian',
  },
  {
    id: '1017ac2a-0cc0-464d-9784-dff53a2a3f6e',
    name: 'Lawrence',
  },
  {
    id: '53ccb337-0846-4c08-9a0c-14a7c835cc77',
    name: 'Chelsea',
  },
  {
    id: '1a224dbf-bdb4-4496-b8a6-655e4b2a3743',
    name: 'Kaycee',
  },
  {
    id: '9bcc9261-8136-4369-93b2-40ae70f7559e',
    name: 'Adele',
  },
  {
    id: '440f0e20-cc92-4df6-8abd-67d44b0bd4df',
    name: 'Demond',
  },
  {
    id: '3084be7d-bab1-4746-9ecb-9a37b4987e07',
    name: 'Colby',
  },
  {
    id: '11c2eb48-8619-445e-be48-380adceeae16',
    name: 'Donavon',
  },
  {
    id: 'be915d80-8921-412f-9726-a1f5044192d1',
    name: 'Wallace',
  },
  {
    id: 'bdf9956c-250b-4fa3-8837-6b9562f220c3',
    name: 'Abraham',
  },
  {
    id: 'cf54fc4e-14d1-4c4c-a64b-468dc01e2be4',
    name: 'Roslyn',
  },
  {
    id: '4de89b4b-b1a0-4843-9c2e-3d392e88b8ba',
    name: 'Cheyenne',
  },
  {
    id: 'f88e7472-4038-4c1d-8b64-767250ff91b6',
    name: 'Alvera',
  },
  {
    id: '822f7263-55ef-471c-a1df-5d050079a25f',
    name: 'Syble',
  },
  {
    id: 'f659d350-5cbe-4724-8704-4dbb7004f7ff',
    name: 'Adolf',
  },
  {
    id: '1e045af8-e2c1-40fb-9a6c-85d5189b99f6',
    name: 'Aubrey',
  },
  {
    id: '32ee00aa-8a9f-4655-94f0-e66c09781f3d',
    name: 'Elva',
  },
  {
    id: '4782d11a-a64a-4c0f-8053-72aff2429881',
    name: 'Orland',
  },
  {
    id: 'ae8f85ba-fcd0-4c4e-bb5f-ff3404945dc3',
    name: 'Shana',
  },
  {
    id: 'a2aa2bd3-eb04-431d-8da2-131b47ce7268',
    name: 'Alfonzo',
  },
  {
    id: '7b7fea28-f2d6-4728-82df-56f04da07484',
    name: 'Tyler',
  },
  {
    id: 'd782965b-966f-4d43-9e4c-b7af2e3936bd',
    name: 'Zella',
  },
  {
    id: '0dc23c3b-743a-4a9f-ba95-f1c2f34ca7bf',
    name: 'Arvilla',
  },
  {
    id: '5ccd30e1-f0c0-495a-addd-cfa3549586d4',
    name: 'Harry',
  },
  {
    id: 'b6e6afd6-9ecb-4bd9-a8e3-defd7890bb08',
    name: 'Colin',
  },
  {
    id: 'af8f5d36-af31-40b2-9eb7-baf07906bf4f',
    name: 'Adella',
  },
  {
    id: 'a458967c-f2df-4aee-be28-7a5f9d14fa08',
    name: 'Bethel',
  },
  {
    id: '461c48d0-e15d-41e2-a193-be510ce2c6df',
    name: 'Harmony',
  },
  {
    id: 'ae9e50b3-1f4e-453e-881b-4837d33de919',
    name: 'Derrick',
  },
  {
    id: 'a1f0c58e-3f62-44bc-8853-f0d8a7013c5d',
    name: 'Hortense',
  },
  {
    id: '5c3a340e-3b21-49a1-a36d-d9187c92d30d',
    name: 'Khalid',
  },
  {
    id: 'a9dbf08c-dc13-4c82-bb89-c769fc38a4c3',
    name: 'Reanna',
  },
  {
    id: '2534ee0b-2a2c-48e3-bb2c-d3c60eb162f1',
    name: 'Naomi',
  },
  {
    id: 'b70d0829-5c3f-46c7-b130-943ab4c636d6',
    name: 'Jacky',
  },
  {
    id: '044fa543-a32c-4f12-9323-f5f7b9be34ea',
    name: 'Myrtie',
  },
  {
    id: 'b8e74b0a-e584-4ba4-baf3-e1a89f7d0469',
    name: 'Guy',
  },
  {
    id: '85e874fd-7ca5-4de1-8b3b-50d0d17697ea',
    name: 'Ludwig',
  },
  {
    id: '1b3be6e1-42a2-4bdd-a767-b36702d5b81f',
    name: 'Mariano',
  },
  {
    id: 'd6f7903d-4ec2-4bab-805a-7d7d0b487dae',
    name: 'Mark',
  },
  {
    id: 'f96bfe7d-9ccf-4968-8197-c5394fe2adb7',
    name: 'Kelsie',
  },
  {
    id: '61c732b0-dde6-402d-b1ba-40cac480b32f',
    name: 'Paula',
  },
  {
    id: '95b59f73-6c9a-4387-b65c-4c23bbec1094',
    name: 'Malachi',
  },
  {
    id: 'b48b9d2c-8309-4737-b93c-ecb8b44195f4',
    name: 'Gene',
  },
  {
    id: '5f446427-8150-4b91-98a3-cf1520e206aa',
    name: 'Violet',
  },
  {
    id: 'be2eb0a5-dc3d-4b98-a4dd-2835fe41e764',
    name: 'Scarlett',
  },
  {
    id: '688ef8c7-b1b2-4d8a-8100-52f3563855b3',
    name: 'Kyleigh',
  },
  {
    id: 'b6bd0f31-c206-473b-9f3a-dbe1c3d6aa9f',
    name: 'Buck',
  },
  {
    id: '98671412-9d12-41cb-8df8-8aab8cf984e5',
    name: 'Roma',
  },
  {
    id: 'bd7b9613-7650-4a3f-823d-dcecdc0ecc23',
    name: 'Willie',
  },
];

export const HomePage: React.FC = () => {
  return (
    <main className="flex items-center justify-center">
      <DropdownInput coins={namesArr} />
    </main>
  );
};
