<!-- PROJECT LOGO -->

# Egyszerű Node.js URL rövidítő API

<!-- Tartalomjegyzék -->

## Tartalomjegyzék

- [Projektről](#projektről)
- [Használat](#használat)
  - [Ezzel készült](#ezzel-készült)
- [Fejlesztési környezet létrehozása](#fejlesztési-környezet-létrehozása)
  - [Kellékek](#kellékek)
  - [Telepítés](#telepítés)
- [Végleges build](#végleges-build)
- [Licensz](#licensz)
- [Elérhetőségek](#elérhetőségek)

<!-- Projektről -->

## Projektről

Az egyszerű URL rövidítő backend segítségével ismerkedtem a Redis caching-rendszerrel.

### Ezzel készült

- [Node.js](https://nodejs.org)
- [Express.js](https://expressjs.com/)
- [Redis](https://redis.io/)
  <!-- Használat -->

## API használata

| Útvonal            | HTTP metódus | Leírás                                                                                                                                     | Példa                                                                                                                                          |
| ------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                | `POST`       | A JSON testben szereplő URL-t beírja a Redis adatbázisba, majd visszaad egy UUID-t, amivel elérhetjük az eredeti URL-t.                    | POST test: `{ "url": "https://google.com" }`, válasz: `35359d95-ac68-441a-8737-a8bad1b60e7f`                                                   |
| `/:rövidített URL` | `GET`        | A rövidített URL-t visszakeresi az adatbázisban. Amennyiben a rövid URL be van jegyezve, átirányítja a klienst a hosszú (eredeti) URL-hez. | Böngésző URL sávjában: `http:<hostnév>/35359d95-ac68-441a-8737-a8bad1b60e7f`, így a böngésző át lesz irányítva a `https://google.com` oldalra. |

  <!-- Fejlesztési környezet létrehozása -->

## Fejlesztési környezet létrehozása

_A fejlesztői verzió nem számít production buildnek. A kész kiszolgáló futtatásához lásd: [Végleges build](#végleges-build)._

### Kellékek

- [Node.js](https://nodejs.org/en/)
- [Redis](https://redis.io/)
- [Git](https://git-scm.com/)
- [Yarn](https://yarnpkg.com/)

### Telepítés

1. Klónozd le a repot

```sh
git clone https://github.com/pmihaly/url-shortener.git
```

2. Telepítsd az NPM csomagokat

```sh
yarn
```

3. Indítsd el a szervert fejlesztői módban

```sh
yarn dev
```

A fejlesztői build elkészülését követően az alkalmazást a `5000`-es porton érheted el.

<!-- Végleges build -->

## Végleges build

A production buildhez [Docker](https://www.docker.com)t használunk, hogy ne kelljen sokat macerálni a telepítésekkel.

### Kellékek

- Docker
- `docker-compose`

### Telepítés

1. Készítsd el a docker képet, majd futtatsd a konténert:

```sh
docker-compose up
```

A production build elkészülését követően az alkalmazást a `80`-as porton érheted el.

<!-- Licensz -->

## Licensz

MIT alatt licenszelve, továbbiakért lásd: [LICENSE](https://github.com/pmihaly/url-shortener/blob/master/LICENSE)

<!-- Elérhetőségek -->

## Elérhetőségek

Papp Mihály - papp.misi@protonmail.com, https://github.com/pmihaly

Projekt link: https://github.com/pmihaly/url-shortener
