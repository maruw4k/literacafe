import React from 'react';
import { graphql } from 'gatsby';
import MainTemplate from 'templates/Main/MainTemplate';
import Meals from 'templates/Menu/Meals';
import CategoryNav from 'templates/Menu/CategoryNav';
import HeroImage from 'components/HeroImage';

const testMeals = [
  {
    category: 'Napoje gorące',
    img: 'https://i.imgur.com/xan6K5P.png',
    subcategories: [
      {
        name: 'Kawa',
        meals: [
          {
            name: 'Espresso',
            price: '10zł',
          },
          {
            name: 'Affogato',
            price: '16zł',
          },
          {
            name: 'Espresso Doppio',
            price: '7zł',
          },
          {
            name: 'Espresso macchiato',
            price: '3zł',
          },
          {
            name: 'Litera Americana',
            price: '3zł',
          },
          {
            name: 'Cappuccino',
            price: '3zł',
          },
          {
            name: 'Mocca',
            price: '3zł',
          },
          {
            name: 'Mocca con panna',
            price: '3zł',
          },
          {
            name: 'Café Latte',
            price: '3zł',
          },
          {
            name: 'Café Latte z syropem',
            price: '3zł',
          },
          {
            name: 'Latte macchiato',
            price: '3zł',
          },
          {
            name: 'Latte Affogato (z gałką lodów)',
            price: '3zł',
          },
          {
            name: 'Kawa z mlekiem',
            price: '9zł',
          },
          {
            name: 'Zimowa latte w sezonie zimowym',
            subname: 'w sezonie zimowym',
            price: '13zł',
          },
          {
            subname:
              'do każdej kawy opcjonalnie mleko : zwykłe, sojowe, bez laktozy',
            price: '2zł',
          },
        ],
      },
      {
        name: 'Kawa mrożona',
        meals: [
          {
            name: 'Frappe',
            price: '10zł',
          },
        ],
      },
      {
        name: 'Herbata liściasta',
        meals: [
          {
            name: 'Filiżanka',
            price: '7zł',
          },
          {
            name: 'Dzbanek',
            price: '7zł',
          },
          {
            name: 'JARDIN BLEU',
            subname: 'mieszanka  chińska, rabarbar i aromat dzikiej truskawki',
            price: '7zł',
          },
          {
            name: 'FRUITS SAMBA',
            price: '7zł',
          },
          {
            name: 'AUX PARFUMS',
            subname:
              'mieszanka herbat chińskich i cejlońskich o owocowo- kwiatowym smaku, z olejkami cytryny, bergamotki, figi, kwiatu lotosu,  z dodatkiem skórki pomarańczowej  i płatków róż',
            price: '7zł',
          },
          {
            name: 'L’ORIENTAL',
            price: '7zł',
          },
          {
            name: 'QUATRE FRUITS ROUGES',
            price: '7zł',
          },
        ],
      },
      {
        name: 'Herbata (saszetki) do wyboru na miejscu',
        meals: [
          {
            name: 'Filiżanka',
            price: '7zł',
          },
          {
            name: 'Dzbanek',
            price: '7zł',
          },
          {
            name: 'Konfitura do herbaty',
            price: '7zł',
          },
          {
            name: 'Herbata zimowa',
            price: '7zł',
          },
          {
            name: 'Mrożona herbata',
            price: '7zł',
          },
          {
            name: 'Napój imbirowy',
            price: '7zł',
          },
        ],
      },
      {
        name: 'Czekolada',
        meals: [
          {
            name: 'Gorąca czekolada',
            price: '10zł',
          },
          {
            name: 'Gorąca czekolada z bitą śmietaną',
            price: '12zł',
          },
        ],
      },
    ],
  },
  {
    category: 'Na słodko',
    img: 'https://i.imgur.com/xTvUIGO.png',
    subcategories: [
      {
        name: 'Ciasta porcje',
        meals: [
          {
            name: 'Ciasto dnia',
            price: '7zł',
          },
          {
            name: 'Beza',
            price: '7zł',
          },
          {
            name: 'Snikers z ciemną/białą czekoladą',
            price: '7zł',
          },
          {
            name: 'Szarlotka',
            price: '7zł',
          },
          {
            name: 'Szarlotka na ciepło',
            price: '7zł',
          },
          {
            name: 'Sernik',
            price: '7zł',
          },
          {
            name: 'Ciasto z wiśnią',
            price: '7zł',
          },
        ],
      },
      {
        name: 'Ciastka',
        meals: [
          {
            name: 'Muffin',
            price: '6zł',
          },
          {
            name: 'Croissant maślany',
            price: '8zł',
          },
          {
            name: 'Ciastko bezglutenowe z belgijską czekoladą',
            price: '6zł',
          },
          {
            name: 'Ciastko owsiane',
            price: '6zł',
          },
          {
            name: 'Mini Macarons (szt.)',
            price: '6zł',
          },
          {
            name: 'Mini Macarons (op.10szt)',
            price: '6zł',
          },
          {
            name: 'Tiramisu',
            price: '6zł',
          },
        ],
      },
      {
        name: 'Gofry i rurki z bitą śmietaną',
        meals: [
          {
            name: 'Gofry z cukrem pudrem',
            price: '7zł',
          },
          {
            name: 'Gofry z konfiturą / polewą czekoladową',
            price: '7zł',
          },
          {
            name: 'Gofry z bitą śmietaną',
            price: '7zł',
          },
          {
            name: 'Rurki z bitą śmietaną',
            price: '7zł',
          },
        ],
      },
      {
        name: 'Owocowo ;)',
        meals: [
          {
            name: 'Lody (gałka)',
            price: '3zł',
          },
          {
            name: 'Sałatka owocowa',
            price: '7zł',
          },
        ],
      },
    ],
  },
  {
    category: 'Na słono',
    img: 'https://i.imgur.com/xTvUIGO.png',
    subcategories: [
      {
        name: 'Menu',
        meals: [
          {
            name: 'Kruche przekąski ( 5 szt.)',
            price: '7zł',
          },
          {
            name: 'Kanapka panini z szynką i serem',
            price: '7zł',
          },
          {
            name: 'Kanapka panini z serem',
            price: '7zł',
          },
          {
            name: 'Quiche',
            price: '7zł',
          },
          {
            name: 'Tost z serem',
            price: '7zł',
          },
          {
            name: 'Tost z szynką i serem',
            price: '7zł',
          },
          {
            name: 'Deska serów',
            price: '7zł',
          },
          {
            name: 'Deska wędlin',
            price: '7zł',
          },
          {
            name: 'Deska mieszana',
            price: '7zł',
          },
          {
            name: 'Tapenady - pasty z zielonych lub czarnych oliwek',
            price: '7zł',
          },
          {
            name: 'Humus naturalny z czerwoną papryką',
            price: '6zł',
          },
          {
            name: 'Oliwki małe',
            price: '3zł',
          },
          {
            name: 'Oliwki duże',
            price: '5zł',
          },
        ],
      },
      {
        name: 'Zupy',
        meals: [
          {
            name: 'do wyboru',
            subname:
              'brokułowa, pomidorowa, dyniowa, ogórkowa, grzybowa, barszcz, ukraiński',
            price: '10zł',
          },
        ],
      },
      {
        name: 'LUNCH-e',
        meals: [
          {
            name: 'Francuski',
            subname: 'zupa, quiche, ciastko owsiane, kawa',
            price: '7zł',
          },
          {
            name: 'Amerykański',
            subname: 'zupa, tost lub kanapka panini, ciastko owsiane, kawa',
            price: '7zł',
          },
        ],
      },
    ],
  },
  {
    category: 'Alkohol',
    img:
      'https://irp-cdn.multiscreensite.com/9b373aa6/dms3rep/multi/desktop/lwowek_19780750-586x350.jpg',
    subcategories: [
      {
        name: 'WINO Literackie (wytrawne, półwytrawne)',
        meals: [
          {
            name: 'chilijskie, hiszpańskie, włoskie, francuskie',
            subname: 'kieliszek/butelka',
            price: '7zł/10zł',
          },
          {
            name: 'Wino domowe',
            subname: 'karafka 250 ml/ karafka 500 ml',
            price: '50zł',
          },
          {
            name: 'Cava (wino musujące)',
            subname: '',
            price: '7zł',
          },
          {
            name: 'Prosecco',
            subname: '',
            price: '7zł',
          },
          {
            name: 'Sherry',
            subname: '',
            price: '7zł',
          },
          {
            name: 'Wino grzane',
            subname: '',
            price: '7zł',
          },
          {
            name: 'Cydr',
            subname: '',
            price: '7zł',
          },
          {
            name: 'Kijafa',
            subname: '',
            price: '7zł',
          },
        ],
      },
      {
        name: 'Drinki',
        meals: [
          {
            name: 'Martynowy bzik',
            price: '8zł',
          },
          {
            name: 'Bellini',
            price: '8zł',
          },
          {
            name: 'Niebieskie Niebo',
            price: '6zł',
          },
          {
            name: 'Aperol',
            price: '6zł',
          },
          {
            name: 'Granat Rock',
            price: '6zł',
          },
          {
            name: 'Mango Rock',
            price: '6zł',
          },
          {
            name: 'Arbuzowy Zawrót Głowy',
            price: '6zł',
          },
        ],
      },
      {
        name: 'Piwa butelkowe 500ml',
        meals: [
          {
            name: 'Witch Beer',
            price: '8zł',
          },
          {
            name: 'Lwówek Wrocławskie',
            price: '8zł',
          },
          {
            name: 'Paulaner pszeniczny',
            price: '6zł',
          },
          {
            name: 'Lwówek Porter',
            price: '6zł',
          },
          {
            name: 'Pilzner Miłosław',
            price: '6zł',
          },
          {
            name: 'Budweiser',
            price: '6zł',
          },
          {
            name: 'Andstadt',
            price: '6zł',
          },
          {
            name: 'Złoty Bażant',
            price: '6zł',
          },
          {
            name: 'Piwo grzane',
            price: '6zł',
          },
        ],
      },
    ],
  },
  {
    category: 'Napoje zimne',
    img:
      'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/10959597_437345166418981_1686575060140062256_n.jpg?_nc_cat=105&_nc_ht=scontent-waw1-1.xx&oh=14dd29a38b6b69926208cbe4f78a0af8&oe=5D5788B2',
    subcategories: [
      {
        name: 'Soki - świeżo wyciskane',
        meals: [
          {
            name: 'chilijskie, hiszpańskie, włoskie, francuskie',
            subname: 'kieliszek/butelka',
            price: '7zł/10zł',
          },
          {
            name: 'Wino domowe',
            subname: 'karafka 250 ml/ karafka 500 ml',
            price: '50zł',
          },
          {
            name: 'Cava (wino musujące)',
            subname: '',
            price: '7zł',
          },
          {
            name: 'Prosecco',
            subname: '',
            price: '7zł',
          },
          {
            name: 'Sherry',
            subname: '',
            price: '7zł',
          },
          {
            name: 'Wino grzane',
            subname: '',
            price: '7zł',
          },
          {
            name: 'Cydr',
            subname: '',
            price: '7zł',
          },
          {
            name: 'Kijafa',
            subname: '',
            price: '7zł',
          },
        ],
      },
      {
        name: 'Koktajle mleczne lub jogurtowe',
        meals: [
          {
            name: 'Zielone błoto (mały)',
            price: '8zł',
          },
          {
            name: 'Bellini',
            price: '8zł',
          },
          {
            name: 'Niebieskie Niebo',
            price: '6zł',
          },
          {
            name: 'Aperol',
            price: '6zł',
          },
          {
            name: 'Granat Rock',
            price: '6zł',
          },
          {
            name: 'Mango Rock',
            price: '6zł',
          },
          {
            name: 'Arbuzowy Zawrót Głowy',
            price: '6zł',
          },
        ],
      },
      {
        name: 'Napoje zimne',
        meals: [
          {
            name: 'Woda Kinga Pienińska',
            price: '8zł',
          },
          {
            name: 'Coca-cola, Fanta, Sprite, Ice Tea',
            price: '8zł',
          },
          {
            name: 'Almdudler',
            price: '6zł',
          },
          {
            name: 'Smothie',
            price: '6zł',
          },
          {
            name: 'Pilzner Miłosław',
            price: '6zł',
          },
          {
            name: 'Budweiser',
            price: '6zł',
          },
          {
            name: 'Andstadt',
            price: '6zł',
          },
          {
            name: 'Złoty Bażant',
            price: '6zł',
          },
          {
            name: 'Piwo grzane',
            price: '6zł',
          },
        ],
      },
    ],
  },
];

export default ({ data }) => {
  let groupedMeals = [];

  data.mainCategories.edges.map(item => {
    let menu = {};
    menu.categoryName = item.node.name;
    menu.categoryId = item.node.strapiId;
    menu.id = item.node.id;
    menu.photo = item.node.photo;
    menu.subcategories = data.subCategories.edges.filter(
      item => item.node.strapiParent.id === menu.categoryId
    );

    menu.subcategories.map(({ node }) => {
      const currentId = node.strapiId;
      node.meals = [];
      node.meals = data.allMeals.edges.filter(
        item => item.node.subcategory.id === currentId
      );
    });

    groupedMeals.push(menu);
  });

  return (
    <MainTemplate>
      <HeroImage
        fileName={data.mainHeroImg.childImageSharp.fluid.src}
        minHeight="40vh"
        opacity={0.2}
        text="Menu"
      />

      <CategoryNav categories={data.mainCategories.edges} />

      <Meals groupedMeals={groupedMeals} />
    </MainTemplate>
  );
};

export const query = graphql`
  {
    mainHeroImg: file(relativePath: { eq: "menu-main-photo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 5375, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    mainCategories: allStrapiCategory {
      totalCount
      edges {
        node {
          strapiId
          id
          name
          photo {
            childImageSharp {
              fixed(height: 330, width: 220) {
                ...GatsbyImageSharpFixed_noBase64
              }
            }
          }
          is_active
        }
      }
    }
    subCategories: allStrapiSubcategory {
      totalCount
      edges {
        node {
          strapiId
          id
          name
          is_active
          strapiParent {
            id
          }
        }
      }
    }
    allMeals: allStrapiMeal {
      edges {
        node {
          id
          strapiId
          name
          price
          subcategory {
            id
          }
        }
      }
    }
  }
`;
