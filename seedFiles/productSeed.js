const productSeed = [
  {
    name: "Huck White Towels",
    category: "dairy",
    imageUrl:
      "https://robohash.org/voluptatesquoratione.png?size=50x50&set=set1",
    price: 56,
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    quantity: 0,
  },
  {
    name: "Soup - Campbells Chicken",
    category: "produce",
    imageUrl:
      "https://robohash.org/commodinequeplaceat.bmp?size=50x50&set=set1",
    price: 50,
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    quantity: 0,
  },
  {
    name: "Mushrooms - Honey",
    category: "dairy",
    imageUrl: "https://robohash.org/quiiustoquod.bmp?size=50x50&set=set1",
    price: 61,
    description:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    quantity: 0,
  },
  {
    name: "Cod - Black Whole Fillet",
    category: "meat",
    imageUrl:
      "https://robohash.org/autpossimusnecessitatibus.jpg?size=50x50&set=set1",
    price: 83,
    description:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    quantity: 0,
  },
  {
    name: "Garam Marsala",
    category: "produce",
    imageUrl: "https://robohash.org/utaliasrecusandae.jpg?size=50x50&set=set1",
    price: 11,
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    quantity: 0,
  },
  {
    name: "Nut - Pine Nuts, Whole",
    category: "produce",
    imageUrl:
      "https://robohash.org/voluptatemdolorumoccaecati.bmp?size=50x50&set=set1",
    price: 24,
    description:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    quantity: 0,
  },
  {
    name: "Chicken - Wings, Tip Off",
    category: "meat",
    imageUrl:
      "https://robohash.org/porrovoluptatesinventore.jpg?size=50x50&set=set1",
    price: 37,
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    quantity: 0,
  },
  {
    name: "Soup - Campbells Mac N Cheese",
    category: "meat",
    imageUrl:
      "https://robohash.org/doloreconsequunturnisi.png?size=50x50&set=set1",
    price: 98,
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    quantity: 0,
  },
  {
    name: "Juice - Pineapple, 341 Ml",
    category: "meat",
    imageUrl:
      "https://robohash.org/expeditamolestiaeest.jpg?size=50x50&set=set1",
    price: 55,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    quantity: 0,
  },
  {
    name: "Cheese Cloth No 60",
    category: "meat",
    imageUrl: "https://robohash.org/nihilessedolore.bmp?size=50x50&set=set1",
    price: 18,
    description:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    quantity: 0,
  },
  {
    name: "Jam - Apricot",
    category: "fish",
    imageUrl: "https://robohash.org/nostrumsedminus.jpg?size=50x50&set=set1",
    price: 38,
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    quantity: 0,
  },
  {
    name: "Bread - Hot Dog Buns",
    category: "dairy",
    imageUrl:
      "https://robohash.org/animiperspiciatisconsequatur.bmp?size=50x50&set=set1",
    price: 81,
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    quantity: 0,
  },
  {
    name: "Bag - Regular Kraft 20 Lb",
    category: "produce",
    imageUrl: "https://robohash.org/uteamollitia.bmp?size=50x50&set=set1",
    price: 21,
    description:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    quantity: 0,
  },
  {
    name: "Lamb - Whole Head Off,nz",
    category: "meat",
    imageUrl:
      "https://robohash.org/voluptasexpeditatenetur.jpg?size=50x50&set=set1",
    price: 20,
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    quantity: 0,
  },
  {
    name: "Initation Crab Meat",
    category: "fish",
    imageUrl:
      "https://robohash.org/distinctiooptioaliquid.png?size=50x50&set=set1",
    price: 13,
    description:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    quantity: 0,
  },
  {
    name: "Arrowroot",
    category: "fish",
    imageUrl: "https://robohash.org/estnumquamnihil.png?size=50x50&set=set1",
    price: 78,
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    quantity: 0,
  },
  {
    name: "Bread - Malt",
    category: "meat",
    imageUrl:
      "https://robohash.org/ullamconsequatureaque.png?size=50x50&set=set1",
    price: 90,
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    quantity: 0,
  },
  {
    name: "Pop - Club Soda Can",
    category: "meat",
    imageUrl: "https://robohash.org/etmolestiasquia.jpg?size=50x50&set=set1",
    price: 8,
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    quantity: 0,
  },
  {
    name: "Tomatoes - Heirloom",
    category: "produce",
    imageUrl: "https://robohash.org/dolorumevenietet.jpg?size=50x50&set=set1",
    price: 60,
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    quantity: 0,
  },
  {
    name: "Nantucket Apple Juice",
    category: "dairy",
    imageUrl: "https://robohash.org/inautnulla.png?size=50x50&set=set1",
    price: 18,
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    quantity: 0,
  },
  {
    name: "Octopus",
    category: "dairy",
    imageUrl: "https://robohash.org/etlaborumpossimus.png?size=50x50&set=set1",
    price: 37,
    description:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    quantity: 0,
  },
  {
    name: "Beef - Roasted, Cooked",
    category: "meat",
    imageUrl: "https://robohash.org/sedporrodebitis.png?size=50x50&set=set1",
    price: 67,
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    quantity: 0,
  },
  {
    name: "Wine - Duboeuf Beaujolais",
    category: "produce",
    imageUrl: "https://robohash.org/accusamuseteius.jpg?size=50x50&set=set1",
    price: 12,
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    quantity: 0,
  },
  {
    name: "Snails - Large Canned",
    category: "fish",
    imageUrl: "https://robohash.org/enimfaciliset.png?size=50x50&set=set1",
    price: 22,
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    quantity: 0,
  },
  {
    name: "Napkin - Dinner, White",
    category: "fish",
    imageUrl: "https://robohash.org/autemeumipsa.bmp?size=50x50&set=set1",
    price: 54,
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    quantity: 0,
  },
  {
    name: "Fork - Plastic",
    category: "fish",
    imageUrl: "https://robohash.org/assumendasaepemodi.jpg?size=50x50&set=set1",
    price: 22,
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    quantity: 0,
  },
  {
    name: "Sugar - Palm",
    category: "produce",
    imageUrl:
      "https://robohash.org/dignissimosmaiorestempora.png?size=50x50&set=set1",
    price: 9,
    description:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    quantity: 0,
  },
  {
    name: "Chilli Paste, Sambal Oelek",
    category: "meat",
    imageUrl: "https://robohash.org/utrationetenetur.jpg?size=50x50&set=set1",
    price: 4,
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    quantity: 0,
  },
  {
    name: "Garam Masala Powder",
    category: "fish",
    imageUrl: "https://robohash.org/quoatqueeos.bmp?size=50x50&set=set1",
    price: 44,
    description:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    quantity: 0,
  },
  {
    name: "Sole - Iqf",
    category: "meat",
    imageUrl: "https://robohash.org/utmagniaspernatur.jpg?size=50x50&set=set1",
    price: 41,
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    quantity: 0,
  },
];

module.exports = productSeed;
