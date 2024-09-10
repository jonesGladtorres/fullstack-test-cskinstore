import { MongoClient } from 'mongodb';
import 'dotenv/config';

async function run() {
  const uri = process.env.DATABASE_URI;

  if (!uri) {
    throw new Error('A string de conexão do MongoDB não foi fornecida.');
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db(process.env.DATABASE_NAME);
    const collection = database.collection(process.env.DATABASE_COLLECTION);

    const items = [
      {
        name: 'Karambit (★) | Aquecimento de Aço',
        image:
          'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0mP74Nr_um25V4dB8xO-WrY7z2Ffs_RI_amDyJdCTdw45ZA2C-Fi9lObsgJPt6ZrMzXJjvSA8pSGK2tpG8Vg/',
        category: 'Faca',
        float: '0.48',
        price: 5400,
        createdAt: new Date('2023-04-12T14:23:00Z'),
        updatedAt: new Date('2023-09-10T10:30:00Z'),
      },
      {
        name: 'Desert Eagle | Cadeia de Caracteres',
        image:
          'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH7duJhJKCmePnJ6nUl2Zu5Mx2gv2P9o-t21fj-RI_Nz2ncYbDcFNoYArYrgDql-3m08PptcjBn3tgs3Yis2GdwUJr9IfvpA/',
        category: 'Pistola',
        float: '0.34',
        price: 307,
        createdAt: new Date('2023-03-15T10:45:00Z'),
        updatedAt: new Date('2023-09-10T10:30:00Z'),
      },
      {
        name: 'USP-S (StatTrak™) | Bocarra',
        image:
          'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ08mlhJO0k_jzNKLum25V4dB8xLmV89mnjFLi-UprMWCgJYaSJgU9ZQvWqQDowbzn0ce06pzAmHRq6Cg8pSGKGJo1hSI/',
        category: 'Pistola',
        float: '0.30',
        price: 55,
        createdAt: new Date('2023-07-02T18:30:00Z'),
        updatedAt: new Date('2023-09-10T10:30:00Z'),
      },
      {
        name: 'Faixas (★) | Caveiras de Cobalto',
        image:
          'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DfVlxgLQFFibKkJQN3wfLYYgJK7dKyg5KKh8j4NrrFnm5D8fp3i-vT_I_KilihriwvOCyveMX6KlNvJxHO-VK3xujvh8Tt6pvJyno2v3Z27XzczBG3h05JaO1q0KedTlvPBKYdHr7CWCThWLmD-A/',
        category: 'Luvas',
        float: '0.05',
        price: 1700,
        createdAt: new Date('2023-05-18T11:15:00Z'),
        updatedAt: new Date('2023-09-10T10:30:00Z'),
      },
      {
        name: 'Faca Esqueleto (★) | Aço Azul',
        image:
          'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwPjNfThW49KJlZG0lfvhNr_unm5Q_tw_jLDHpoj23FHl80ZoNmv3d4LAcQE8N1_R-APrkO_oh5e875_JwHJqvj5iuyiq5NTG2A/',
        category: 'Faca',
        float: '0.55',
        price: 2994,
        createdAt: new Date('2023-08-20T16:50:00Z'),
        updatedAt: new Date('2023-09-10T10:30:00Z'),
      },
      {
        name: 'Faca Stiletto (★) | Aço Azul',
        image:
          'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwOfBfThW-NOJlZG0lfvhNr_ummJW4NE_ieiYrNil2Aa3-RU6ZGnzIteRdg9sYQ3R-wS4yenpgcC_6p-cmHA2uT5iuyh-9f1Saw/',
        category: 'Faca',
        float: '0.15',
        price: 2150,
        createdAt: new Date('2023-02-12T09:05:00Z'),
        updatedAt: new Date('2023-09-10T10:30:00Z'),
      },
      {
        name: 'AWP | Neo-Noir',
        image:
          'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJM6dO4m4mZqPrxN7LEmyVVsJAijL7D8I2njAzlqkY9Nm_ycYadewY2Z1zX8lPsyO3tjZW_vpmY1zI97fJZpdj_/',
        category: 'Rifle de Precisão',
        float: '0.18',
        price: 130,
        createdAt: new Date('2023-06-07T13:40:00Z'),
        updatedAt: new Date('2023-09-10T10:30:00Z'),
      },
      {
        name: 'SCAR-20 | Fragmentos',
        image:
          'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PTbTi5B7c6JkpKKkPrxPa_CqWld6cZ6teXI8oThxgPm-0FsMTz7J4PGdlU2Zl6C_Va4x7_n1MPo7c7IwXQ17yAit3aPyUSpwUYb2tfbJpM/',
        category: 'Rifle de Precisão',
        float: '0.15',
        price: 2,
        createdAt: new Date('2023-01-25T12:00:00Z'),
        updatedAt: new Date('2023-09-10T10:30:00Z'),
      },
      {
        name: 'Nova | Despertar da Caveira',
        image:
          'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszbeihO4OO4m5aKqPv9NLPF2G1U7JAp07iU99yljg3t_hVkamDzJdDHcVJtZF2F-wC8kr_rgp-06pjXiSw0UfJz7_o/',
        category: 'Escopeta',
        float: '0.08',
        price: 29,
        createdAt: new Date('2023-04-04T08:25:00Z'),
        updatedAt: new Date('2023-09-10T10:30:00Z'),
      },
      {
        name: 'MAG-7 | Chamado Monstruoso',
        image:
          'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhjxszFcDoV09G5mpOfkuXLMLrdmlRc7cF4n-SPoY3zigHtrhdpZTj2LYaSdA9oZw2D_QDrxum-g5_vvpvKznM3vnUjsGGdwUKw6tNvYA/',
        category: 'Escopeta',
        float: '0.1',
        price: 800,
        createdAt: new Date('2023-05-14T17:50:00Z'),
        updatedAt: new Date('2023-09-10T10:30:00Z'),
      },
      {
        name: 'M4A4 | O Imperador',
        image:
          'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09m7hIWZmOXLPr7Vn35cpsAn3OuTrYit2Afi_ktrNmqiI4eWJlU6NF7Zrwe9wubpjJS7usnKwSZ9-n51LPua7N4/',
        category: 'Rifle',
        float: '0.04',
        price: 56,
        createdAt: new Date('2023-02-01T10:15:00Z'),
        updatedAt: new Date('2023-09-10T10:30:00Z'),
      },
      {
        name: 'AK-47 | MU53U',
        image:
          'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV0920h5SZlvTgDLbUkmJE5Yt3juqZp4-njAa2-UU6aj31LNDEJgU7YA7T81i-l7y61MXotc_LwHZlpGB8svJHHkl5/',
        category: 'Rifle',
        float: '0.1',
        price: 90,
        createdAt: new Date('2023-06-22T14:45:00Z'),
        updatedAt: new Date('2023-09-10T10:30:00Z'),
      },
      {
        name: 'Adesivo | pronax (Brilhante) | Cluj-Napoca 2015',
        image:
          'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulReQFnaFbT8goDAWlpLNRZYuLu9FAFv2v-GIWVAvdnixoTSxfagYeLVwW0JsJdy3r-Y9Nyi2AHk8kRrYW36I4bBcBh-Pw9XO5e06Q/',
        category: 'Adesivo',
        float: 'null',
        price: 900,
        createdAt: new Date('2023-03-08T07:30:00Z'),
        updatedAt: new Date('2023-09-10T10:30:00Z'),
      },
      {
        name: 'Adesivo | Boom (Holográfico) | CRM 2020',
        image:
          'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRPQV6CF7b9mM3cXFBLLQtbufSkLQY3gqeRd2wbu921xtONz6egMuPVwjgGuJQli7qQoYn23lLs-UFofSmtcwbt1G0w/',
        category: 'Adesivo',
        float: 'null',
        price: 200,
        createdAt: new Date('2023-07-19T16:05:00Z'),
        updatedAt: new Date('2023-09-10T10:30:00Z'),
      },
      {
        name: 'MAC-10 (StatTrak™) | Discoteca',
        image:
          'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJmoGIhfLLP7LWnn8fsMFy3riTot_3igft_UM4ajj6coOVdlRrYl-CqAK8w7260J677s6bwWwj5HePhOsuTQ/',
        category: 'Submetralhadora',
        float: '0.1',
        price: 350,
        createdAt: new Date('2023-02-28T09:55:00Z'),
        updatedAt: new Date('2023-09-10T10:30:00Z'),
      },
      {
        name: 'MP9 | Dardo Venenoso Rubi',
        image:
          'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZt7P7YKAJM5cikm4eOmcj4OrzZgiUEusAni72Sp92gjlK2qBI4YTv3I9eUd1c6M1DY-lK7lOi60ZS1vZXN1zI97ROIBd7O/',
        category: 'Submetralhadora',
        float: '0.2',
        price: 1000,
        createdAt: new Date('2023-01-20T11:35:00Z'),
        updatedAt: new Date('2023-09-10T10:30:00Z'),
      },
      {
        name: 'Sr. Darryl Sangrento de Miami | Os Profissionais',
        image:
          'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4W1OQhm1uDbeDJM7dCJgoGZkbnyYuiEwTwGsZYk3euUpt6k2FK2qks9N2v1I4OVIwE4YV6FrAXrw-btm9bi63zVXqmU/',
        category: 'Agente',
        float: 'null',
        price: 522,
        createdAt: new Date('2023-04-30T12:50:00Z'),
        updatedAt: new Date('2023-09-10T10:30:00Z'),
      },
      {
        name: 'Arno, o Eremita | Guerrilheiros',
        image:
          'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4WvPgln3_b3YzxL6Nmkq5aKhf71Pa_S2GlSv5F13LHCp9SjjFfh8kpuZG2mLY-Uewc2ZA7Tq1Hrl7u7hcXuusvXiSw0ORwQxJE/',
        category: 'Agente',
        float: 'null',
        price: 40,
        createdAt: new Date('2023-07-04T15:20:00Z'),
        updatedAt: new Date('2023-09-10T10:30:00Z'),
      },
      {
        name: 'Luvas de Especialista (★) | Degradê',
        image:
          'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1h3LAVbv6mxFABs3OXNYgJR_Nm1nYGHnuTgDL3Qkm5u4MBwnPCPpd7ziwXlrUtla2qmJtOSdwQ-Y13V_li8lb25gJW67smaySExvCAq42GdwULjRibN9Q/',
        category: 'Luvas',
        float: '0.58',
        price: 1050,
        createdAt: new Date('2023-03-25T14:00:00Z'),
        updatedAt: new Date('2023-09-10T10:30:00Z'),
      },
      {
        name: 'Faca Bowie (★) | Mármore Desbotado',
        image:
          'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwObaZzRU7dCJlo-cnvLLMrbum2pD6sl0te_A8YnKhF2zowdyaj-mJo6SI1A9N1jX8gK8lbvv18TovsnPyXc1s3Qq4izdmkCziEwabvsv26JVx53CtQ/',
        category: 'Faca',
        float: '0.07',
        price: 1892,
        createdAt: new Date('2023-05-17T11:20:00Z'),
        updatedAt: new Date('2023-09-10T10:30:00Z'),
      },
    ];

    const result = await collection.insertMany(items);
    console.log(
      `Foram inseridos ${result.insertedCount} items ao banco de dados.`,
    );
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
