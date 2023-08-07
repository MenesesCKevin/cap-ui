sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/indelpro/booksui/test/integration/FirstJourney',
		'com/indelpro/booksui/test/integration/pages/BooksList',
		'com/indelpro/booksui/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/indelpro/booksui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);