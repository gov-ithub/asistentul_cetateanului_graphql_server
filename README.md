# Asistentul Cetățeanului [![Travis build](https://travis-ci.org/gov-ithub/asistentul_cetateanului_frontend.svg?branch=master)](https://travis-ci.org/gov-ithub/asistentul_cetateanului_frontend) [![Slack Status](https://govitslack.herokuapp.com/badge.svg)]

Asistent utilitar care livrează alerte și notificări pentru cetățeni, în funcție de preferințe. La bază este un notification engine, cu un API care oferă posibilitatea de livrare de alerte din partea diverselor agenții / instituții ale statului. Aceste notificări se împart în cele cu caracter general (care sunt de interes pentru mai mulți cetățeni, cum ar fi alertele meteo) sau cu caracter personal (care sunt de interes pentru un singur cetățean, cum ar fi cele legate de expirarea documentelor). Mai multe detalii pe [wiki](https://github.com/gov-ithub/asistentul_cetateanului_frontend/wiki).

## Despre repo
GraphQL server pentru testarea integrării cu front-end-ul. Este integrat cu Heroku pentru CI: https://asist-cetatean-graphql.herokuapp.com/graphql

- [Sample query](https://asist-cetatean-graphql.herokuapp.com/graphql?query=query%7B%0A%20%20notifications%7B%0A%20%20%20%20title%2C%0A%20%20%20%20description%2C%0A%20%20%20%20source%7B%0A%20%20%20%20%20%20id%2C%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)

## Tehnologii folosite
- [express-graphql](https://github.com/graphql/express-graphql)
- [graphql-js](https://github.com/graphql/graphql-js)
 
## Contribuie

Dacă vrei să contribui - ești binevenit(ă) - but we don't have cookies (yet) 

### Proces
- Vezi lista de tehnologii folosite - îți sunt familiare?
- Dacă nu ești încă înscris(ă) în comunitate, te rog fă-o pe [site-ul GovITHub](http://ithub.gov.ro/formular-de-aplicatie/)
- Aruncă o privire la [guidelines](https://github.com/gov-ithub/guidelines/blob/master/CODE_REVIEW.md) pentru code review 
- Caută în issues un task interesant pentru tine (sau, dacă ai o propunere, deschide un issue / trimite un pull request). Task-urile care nu sunt up-for-grabs sunt [marcate ca atare](https://github.com/gov-ithub/asistentul_cetateanului_frontend/issues?q=is%3Aopen+is%3Aissue+label%3Aup-for-grabs).
- După ce trecem prin code review - celebrate! :star: :star2: :star:

## Cum poti intra in contact cu echipa?
- Email: claudiu.ceia@ithub.gov.ro
- [Slack](https://govithub.slack.com/messages/asist_cetatean/details/) 

Mai multe detalii în curând! 

----------

**Made with :heart: by [GovITHub](http://ithub.gov.ro)**
