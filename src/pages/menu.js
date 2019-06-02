import React from 'react';
import { graphql } from 'gatsby';
import MainTemplate from 'templates/MainTemplate';
import HeroImage from 'components/HeroImage';
import SectionHeader from 'components/SectionHeader';
import styled from 'styled-components';
import { theme } from 'assets/styles/theme';

const meals = [
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
            name: 'Zimowa latte' + 'w sezonie zimowym',
            price: '13zł',
          },
          {
            name:
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
            price: '7zł',
          },
          {
            name: 'FRUITS SAMBA',
            price: '7zł',
          },
          {
            name: 'AUX PARFUMS',
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

const StyledCategoryNav = styled.nav`
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 99;
  padding: 0 15px;
  width: 100%;
  border-bottom: 1px solid grey;

  ul {
    display: flex;
    align-items: center;
    list-style-type: none;
    padding: 0;
    flex-wrap: wrap;
    margin: 0;
    height: 60px;

    li {
      width: 33.3%;
    }

    ${theme.mq.tablet} {
      flex-direction: column;
      height: initial;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: nowrap;
      li {
        width: initial;
      }
    }
  }

  ${theme.mq.tablet} {
    border-bottom: none;
    display: block;
    position: sticky;
    margin-top: 100px;
    top: 30px;
    height: 330px;
    width: auto;
    left: 2vw;
    float: left;
  }

  ${theme.mq.desktop} {
    left: 13vw;
  }
`;

const StyledCategoryTitle = styled(SectionHeader)`
  margin-bottom: 1rem;
`;

const StyledSubTitle = styled.h4`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2rem;
  margin-top: 3.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const StyledMeal = styled.div`
  text-transform: uppercase;
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    text-align: left;
    padding-right: 30px;
  }

  span {
    font-weight: bold;
  }
`;

const StyledCategoryPhoto = styled.img`
  display: none;
  ${theme.mq.tablet} {
    display: block;
    position: sticky;
    margin-top: 150px;
    top: 30px;
    height: 330px;
    width: 220px;
    right: 2vw;
    float: right;
  }

  ${theme.mq.desktop} {
    right: 13vw;
  }
`;


const MealContainer = styled.div`
  padding: 0 15px;
  margin: 0 auto 100px auto;
  max-width: 400px;

  ${theme.mq.desktop} {
    max-width: 600px;
  }
`;

export default ({ data }) => {
  return (
    <MainTemplate>
      <HeroImage
        fileName={data.mainHeroImg.childImageSharp.fluid.src}
        minHeight="40vh"
        opacity={0.2}
        text="Menu"
      />

      <StyledCategoryNav>
        <ul>
          {meals.map((item, index) => (
            <li key={index}>
              <a href={'#category' + index}>{item.category}</a>
            </li>
          ))}
        </ul>
      </StyledCategoryNav>

      {meals.map((item, index) => (
        <div key={index}>
          <StyledCategoryPhoto src={item.img} alt={item.category + 'photo'} />

          <MealContainer id={'category' + index}>
            <StyledCategoryTitle title={item.category} />

            {item.subcategories.map((sub, index) => (
              <div key={index}>
                <StyledSubTitle>{sub.name}</StyledSubTitle>
                {sub.meals.map((meal, index) => (
                  <StyledMeal key={index}>
                    <p>{meal.name}</p>
                    <span>{meal.price}</span>
                  </StyledMeal>
                ))}
              </div>
            ))}
          </MealContainer>
        </div>
      ))}
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
  }
`;
