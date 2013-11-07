$(function(){
  
   //defaults
   $.fn.editable.defaults.url = '/post'; 

    //enable / disable
	
//definition variable user

	
   $('#enable').click(function() {
       $('#user .editable').editable('toggleDisabled');
   });    
   
    
    //SALARIE FICHE EDITABLE
   
			//INFORMATION PERSONELLE
   
    $('#matricule').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'matricule',
           title: 'Entrer maricule du salarier'
    });
     $('#nom').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'nom',
           title: 'Entrer le nom du salari&eacute;'
    });
    $('#nomjeunefille').editable({
        validate: function(value) {
           if($.trim(value) == '') return 'This field is required';
        }
    });
    $('#prenom').editable({
        validate: function(value) {
           if($.trim(value) == '') return 'This field is required';
        }
    });
    
    $('#sex').editable({
        prepend: "champ non remplis",
        source: [
            {value: 1, text: 'Male'},
            {value: 2, text: 'Female'}
        ],
        display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });    
    
    
     $('#titre').editable({
        prepend: "champ non remplis",
        source: [
            {value: 1, text: 'Monsieur'},
            {value: 2, text: 'Madame'},
	    {value: 3, text: 'Mademoiselle'}
        ],
	    display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue", 3: "pink"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });    
    
    
    
		//ETAT CIVIL 
    
     $('#n-sec-soc').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'n-sec-soc',
           title: 'Entrer numero securit&#233; sociale'
    });
    $('#date-naissance').editable({
        datepicker: {
            todayBtn: 'linked'
        } 
    });  
    $('#lieu-de-naissance').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'lieu de naissance',
           title: 'Entrer lieu de naissance'
    });
    
    var countries = [];
    $.each({"BD": "Bangladesh", "BE": "Belgium", "BF": "Burkina Faso", "BG": "Bulgaria", "BA": "Bosnia and Herzegovina", "BB": "Barbados", "WF": "Wallis and Futuna", "BL": "Saint Bartelemey", "BM": "Bermuda", "BN": "Brunei Darussalam", "BO": "Bolivia", "BH": "Bahrain", "BI": "Burundi", "BJ": "Benin", "BT": "Bhutan", "JM": "Jamaica", "BV": "Bouvet Island", "BW": "Botswana", "WS": "Samoa", "BR": "Brazil", "BS": "Bahamas", "JE": "Jersey", "BY": "Belarus", "O1": "Other Country", "LV": "Latvia", "RW": "Rwanda", "RS": "Serbia", "TL": "Timor-Leste", "RE": "Reunion", "LU": "Luxembourg", "TJ": "Tajikistan", "RO": "Romania", "PG": "Papua New Guinea", "GW": "Guinea-Bissau", "GU": "Guam", "GT": "Guatemala", "GS": "South Georgia and the South Sandwich Islands", "GR": "Greece", "GQ": "Equatorial Guinea", "GP": "Guadeloupe", "JP": "Japan", "GY": "Guyana", "GG": "Guernsey", "GF": "French Guiana", "GE": "Georgia", "GD": "Grenada", "GB": "United Kingdom", "GA": "Gabon", "SV": "El Salvador", "GN": "Guinea", "GM": "Gambia", "GL": "Greenland", "GI": "Gibraltar", "GH": "Ghana", "OM": "Oman", "TN": "Tunisia", "JO": "Jordan", "HR": "Croatia", "HT": "Haiti", "HU": "Hungary", "HK": "Hong Kong", "HN": "Honduras", "HM": "Heard Island and McDonald Islands", "VE": "Venezuela", "PR": "Puerto Rico", "PS": "Palestinian Territory", "PW": "Palau", "PT": "Portugal", "SJ": "Svalbard and Jan Mayen", "PY": "Paraguay", "IQ": "Iraq", "PA": "Panama", "PF": "French Polynesia", "BZ": "Belize", "PE": "Peru", "PK": "Pakistan", "PH": "Philippines", "PN": "Pitcairn", "TM": "Turkmenistan", "PL": "Poland", "PM": "Saint Pierre and Miquelon", "ZM": "Zambia", "EH": "Western Sahara", "RU": "Russian Federation", "EE": "Estonia", "EG": "Egypt", "TK": "Tokelau", "ZA": "South Africa", "EC": "Ecuador", "IT": "Italy", "VN": "Vietnam", "SB": "Solomon Islands", "EU": "Europe", "ET": "Ethiopia", "SO": "Somalia", "ZW": "Zimbabwe", "SA": "Saudi Arabia", "ES": "Spain", "ER": "Eritrea", "ME": "Montenegro", "MD": "Moldova, Republic of", "MG": "Madagascar", "MF": "Saint Martin", "MA": "Morocco", "MC": "Monaco", "UZ": "Uzbekistan", "MM": "Myanmar", "ML": "Mali", "MO": "Macao", "MN": "Mongolia", "MH": "Marshall Islands", "MK": "Macedonia", "MU": "Mauritius", "MT": "Malta", "MW": "Malawi", "MV": "Maldives", "MQ": "Martinique", "MP": "Northern Mariana Islands", "MS": "Montserrat", "MR": "Mauritania", "IM": "Isle of Man", "UG": "Uganda", "TZ": "Tanzania, United Republic of", "MY": "Malaysia", "MX": "Mexico", "IL": "Israel", "FR": "France", "IO": "British Indian Ocean Territory", "FX": "France, Metropolitan", "SH": "Saint Helena", "FI": "Finland", "FJ": "Fiji", "FK": "Falkland Islands (Malvinas)", "FM": "Micronesia, Federated States of", "FO": "Faroe Islands", "NI": "Nicaragua", "NL": "Netherlands", "NO": "Norway", "NA": "Namibia", "VU": "Vanuatu", "NC": "New Caledonia", "NE": "Niger", "NF": "Norfolk Island", "NG": "Nigeria", "NZ": "New Zealand", "NP": "Nepal", "NR": "Nauru", "NU": "Niue", "CK": "Cook Islands", "CI": "Cote d'Ivoire", "CH": "Switzerland", "CO": "Colombia", "CN": "China", "CM": "Cameroon", "CL": "Chile", "CC": "Cocos (Keeling) Islands", "CA": "Canada", "CG": "Congo", "CF": "Central African Republic", "CD": "Congo, The Democratic Republic of the", "CZ": "Czech Republic", "CY": "Cyprus", "CX": "Christmas Island", "CR": "Costa Rica", "CV": "Cape Verde", "CU": "Cuba", "SZ": "Swaziland", "SY": "Syrian Arab Republic", "KG": "Kyrgyzstan", "KE": "Kenya", "SR": "Suriname", "KI": "Kiribati", "KH": "Cambodia", "KN": "Saint Kitts and Nevis", "KM": "Comoros", "ST": "Sao Tome and Principe", "SK": "Slovakia", "KR": "Korea, Republic of", "SI": "Slovenia", "KP": "Korea, Democratic People's Republic of", "KW": "Kuwait", "SN": "Senegal", "SM": "San Marino", "SL": "Sierra Leone", "SC": "Seychelles", "KZ": "Kazakhstan", "KY": "Cayman Islands", "SG": "Singapore", "SE": "Sweden", "SD": "Sudan", "DO": "Dominican Republic", "DM": "Dominica", "DJ": "Djibouti", "DK": "Denmark", "VG": "Virgin Islands, British", "DE": "Germany", "YE": "Yemen", "DZ": "Algeria", "US": "United States", "UY": "Uruguay", "YT": "Mayotte", "UM": "United States Minor Outlying Islands", "LB": "Lebanon", "LC": "Saint Lucia", "LA": "Lao People's Democratic Republic", "TV": "Tuvalu", "TW": "Taiwan", "TT": "Trinidad and Tobago", "TR": "Turkey", "LK": "Sri Lanka", "LI": "Liechtenstein", "A1": "Anonymous Proxy", "TO": "Tonga", "LT": "Lithuania", "A2": "Satellite Provider", "LR": "Liberia", "LS": "Lesotho", "TH": "Thailand", "TF": "French Southern Territories", "TG": "Togo", "TD": "Chad", "TC": "Turks and Caicos Islands", "LY": "Libyan Arab Jamahiriya", "VA": "Holy See (Vatican City State)", "VC": "Saint Vincent and the Grenadines", "AE": "United Arab Emirates", "AD": "Andorra", "AG": "Antigua and Barbuda", "AF": "Afghanistan", "AI": "Anguilla", "VI": "Virgin Islands, U.S.", "IS": "Iceland", "IR": "Iran, Islamic Republic of", "AM": "Armenia", "AL": "Albania", "AO": "Angola", "AN": "Netherlands Antilles", "AQ": "Antarctica", "AP": "Asia/Pacific Region", "AS": "American Samoa", "AR": "Argentina", "AU": "Australia", "AT": "Austria", "AW": "Aruba", "IN": "India", "AX": "Aland Islands", "AZ": "Azerbaijan", "IE": "Ireland", "ID": "Indonesia", "UA": "Ukraine", "QA": "Qatar", "MZ": "Mozambique"}, function(k, v) {
        countries.push({id: k, text: v});
    }); 
    $('#pays-nationalite').editable({
        source: countries,
        select2: {
            width: 200
        } 
    });  
   
    $('#situation').editable({
        prepend: "champ non remplis",
        source: [
            {value: 1, text: 'Celibataire'},
            {value: 2, text: 'Marier'},
	    {value: 3, text: 'Divorc&eacute; '},
	    {value: 4, text: 'Veuf'},
	    {value: 5, text: 'Autre;'}
        ],
	    display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue", 3: "pink", 4: "blue", 5: "pink"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });    
    

    $('#nombre-enfant').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'nombre-enfant',
           title: 'Entrer nombre enfant'
    });
    $('#addresse').editable({
        url: '/post',
        value: {
            city: "paris", 
            street: "Lenina", 
            building: "12" ,
		
        },
        validate: function(value) {
            if(value.city == '') return 'city is required!'; 
        },
        display: function(value) {
            if(!value) {
                $(this).empty();
                return; 
            }
            var html = '<b>' + $('<div>').text(value.city).html() + '</b>, ' + $('<div>').text(value.street).html() + ' st., bld. ' + $('<div>').text(value.building).html() ;
            $(this).html(html); 
        }         
    });    
    $('#Code-Postal').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'Code-Postal',
           title: 'Entrer Code-Postal'
    });
    
    
     var countries = [];
    $.each({"BD": "Bangladesh", "BE": "Belgium", "BF": "Burkina Faso", "BG": "Bulgaria", "BA": "Bosnia and Herzegovina", "BB": "Barbados", "WF": "Wallis and Futuna", "BL": "Saint Bartelemey", "BM": "Bermuda", "BN": "Brunei Darussalam", "BO": "Bolivia", "BH": "Bahrain", "BI": "Burundi", "BJ": "Benin", "BT": "Bhutan", "JM": "Jamaica", "BV": "Bouvet Island", "BW": "Botswana", "WS": "Samoa", "BR": "Brazil", "BS": "Bahamas", "JE": "Jersey", "BY": "Belarus", "O1": "Other Country", "LV": "Latvia", "RW": "Rwanda", "RS": "Serbia", "TL": "Timor-Leste", "RE": "Reunion", "LU": "Luxembourg", "TJ": "Tajikistan", "RO": "Romania", "PG": "Papua New Guinea", "GW": "Guinea-Bissau", "GU": "Guam", "GT": "Guatemala", "GS": "South Georgia and the South Sandwich Islands", "GR": "Greece", "GQ": "Equatorial Guinea", "GP": "Guadeloupe", "JP": "Japan", "GY": "Guyana", "GG": "Guernsey", "GF": "French Guiana", "GE": "Georgia", "GD": "Grenada", "GB": "United Kingdom", "GA": "Gabon", "SV": "El Salvador", "GN": "Guinea", "GM": "Gambia", "GL": "Greenland", "GI": "Gibraltar", "GH": "Ghana", "OM": "Oman", "TN": "Tunisia", "JO": "Jordan", "HR": "Croatia", "HT": "Haiti", "HU": "Hungary", "HK": "Hong Kong", "HN": "Honduras", "HM": "Heard Island and McDonald Islands", "VE": "Venezuela", "PR": "Puerto Rico", "PS": "Palestinian Territory", "PW": "Palau", "PT": "Portugal", "SJ": "Svalbard and Jan Mayen", "PY": "Paraguay", "IQ": "Iraq", "PA": "Panama", "PF": "French Polynesia", "BZ": "Belize", "PE": "Peru", "PK": "Pakistan", "PH": "Philippines", "PN": "Pitcairn", "TM": "Turkmenistan", "PL": "Poland", "PM": "Saint Pierre and Miquelon", "ZM": "Zambia", "EH": "Western Sahara", "RU": "Russian Federation", "EE": "Estonia", "EG": "Egypt", "TK": "Tokelau", "ZA": "South Africa", "EC": "Ecuador", "IT": "Italy", "VN": "Vietnam", "SB": "Solomon Islands", "EU": "Europe", "ET": "Ethiopia", "SO": "Somalia", "ZW": "Zimbabwe", "SA": "Saudi Arabia", "ES": "Spain", "ER": "Eritrea", "ME": "Montenegro", "MD": "Moldova, Republic of", "MG": "Madagascar", "MF": "Saint Martin", "MA": "Morocco", "MC": "Monaco", "UZ": "Uzbekistan", "MM": "Myanmar", "ML": "Mali", "MO": "Macao", "MN": "Mongolia", "MH": "Marshall Islands", "MK": "Macedonia", "MU": "Mauritius", "MT": "Malta", "MW": "Malawi", "MV": "Maldives", "MQ": "Martinique", "MP": "Northern Mariana Islands", "MS": "Montserrat", "MR": "Mauritania", "IM": "Isle of Man", "UG": "Uganda", "TZ": "Tanzania, United Republic of", "MY": "Malaysia", "MX": "Mexico", "IL": "Israel", "FR": "France", "IO": "British Indian Ocean Territory", "FX": "France, Metropolitan", "SH": "Saint Helena", "FI": "Finland", "FJ": "Fiji", "FK": "Falkland Islands (Malvinas)", "FM": "Micronesia, Federated States of", "FO": "Faroe Islands", "NI": "Nicaragua", "NL": "Netherlands", "NO": "Norway", "NA": "Namibia", "VU": "Vanuatu", "NC": "New Caledonia", "NE": "Niger", "NF": "Norfolk Island", "NG": "Nigeria", "NZ": "New Zealand", "NP": "Nepal", "NR": "Nauru", "NU": "Niue", "CK": "Cook Islands", "CI": "Cote d'Ivoire", "CH": "Switzerland", "CO": "Colombia", "CN": "China", "CM": "Cameroon", "CL": "Chile", "CC": "Cocos (Keeling) Islands", "CA": "Canada", "CG": "Congo", "CF": "Central African Republic", "CD": "Congo, The Democratic Republic of the", "CZ": "Czech Republic", "CY": "Cyprus", "CX": "Christmas Island", "CR": "Costa Rica", "CV": "Cape Verde", "CU": "Cuba", "SZ": "Swaziland", "SY": "Syrian Arab Republic", "KG": "Kyrgyzstan", "KE": "Kenya", "SR": "Suriname", "KI": "Kiribati", "KH": "Cambodia", "KN": "Saint Kitts and Nevis", "KM": "Comoros", "ST": "Sao Tome and Principe", "SK": "Slovakia", "KR": "Korea, Republic of", "SI": "Slovenia", "KP": "Korea, Democratic People's Republic of", "KW": "Kuwait", "SN": "Senegal", "SM": "San Marino", "SL": "Sierra Leone", "SC": "Seychelles", "KZ": "Kazakhstan", "KY": "Cayman Islands", "SG": "Singapore", "SE": "Sweden", "SD": "Sudan", "DO": "Dominican Republic", "DM": "Dominica", "DJ": "Djibouti", "DK": "Denmark", "VG": "Virgin Islands, British", "DE": "Germany", "YE": "Yemen", "DZ": "Algeria", "US": "United States", "UY": "Uruguay", "YT": "Mayotte", "UM": "United States Minor Outlying Islands", "LB": "Lebanon", "LC": "Saint Lucia", "LA": "Lao People's Democratic Republic", "TV": "Tuvalu", "TW": "Taiwan", "TT": "Trinidad and Tobago", "TR": "Turkey", "LK": "Sri Lanka", "LI": "Liechtenstein", "A1": "Anonymous Proxy", "TO": "Tonga", "LT": "Lithuania", "A2": "Satellite Provider", "LR": "Liberia", "LS": "Lesotho", "TH": "Thailand", "TF": "French Southern Territories", "TG": "Togo", "TD": "Chad", "TC": "Turks and Caicos Islands", "LY": "Libyan Arab Jamahiriya", "VA": "Holy See (Vatican City State)", "VC": "Saint Vincent and the Grenadines", "AE": "United Arab Emirates", "AD": "Andorra", "AG": "Antigua and Barbuda", "AF": "Afghanistan", "AI": "Anguilla", "VI": "Virgin Islands, U.S.", "IS": "Iceland", "IR": "Iran, Islamic Republic of", "AM": "Armenia", "AL": "Albania", "AO": "Angola", "AN": "Netherlands Antilles", "AQ": "Antarctica", "AP": "Asia/Pacific Region", "AS": "American Samoa", "AR": "Argentina", "AU": "Australia", "AT": "Austria", "AW": "Aruba", "IN": "India", "AX": "Aland Islands", "AZ": "Azerbaijan", "IE": "Ireland", "ID": "Indonesia", "UA": "Ukraine", "QA": "Qatar", "MZ": "Mozambique"}, function(k, v) {
        countries.push({id: k, text: v});
    }); 
    $('#pays').editable({
        source: countries,
        select2: {
            width: 200
        } 
    });  
   $ ('#telephone').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'telephone',
           title: 'Entrer numero telephone'
    });
     $ ('#email').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'email',
           title: 'Entrer email'
    });
    
    //AFFECTATION
    
    $('#numero-etablissement').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'numero-etablissement',
           title: 'Entrer numero etablissement'
    });
     $('#lieu-travail-different').editable({
        prepend: "champ non remplis",
        source: [
            {value: 1, text: 'France'},
            {value: 2, text: 'Frontalier'},
	    {value: 3, text: 'Etranger '}
	    
        ],
	    display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue", 3: "pink"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });    
    $('#emploi').editable({
        prepend: "champ non remplis",
        source: [
            {value: 1, text: 'Mineur'},
            {value: 2, text: 'Forgeron'},
	    {value: 3, text: 'Menuisier '},
	    {value: 4, text: 'Fermier'},
	    {value: 5, text: 'Pecheur'},
	    {value: 6, text: 'Explorateur'},
	    {value: 7, text: 'Ingenieur'},
	    {value: 8, text: 'Restaurateur'},
	    {value: 9, text: 'Alchimiste'}
	    
        ],
	   display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue", 3: "pink"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });       
$('#categorie').editable({
        prepend: "champ non remplis",
        source: [
            {value: 1, text: 'Dirigeant'},
            {value: 2, text: 'Cadre'},
	    {value: 3, text: 'Apprenti'},
	    {value: 4, text: 'Autre'}
	    
	    
        ],
	   display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue", 3: "pink"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    }); 

 $('#qualification').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'Qualification',
           title: 'Entrer Qualification'
});
    $('#echelon').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'echelon',
           title: 'Entrer Echelon'
});
    
     $('#coefficient').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'coefficient',
           title: 'Entrer Coefficient'
});

     $('#date-debut').editable({
        datepicker: {
            todayBtn: 'linked'
        } 
    });  
     $('#date-fin').editable({
        datepicker: {
            todayBtn: 'linked'
        } 
    });  
    
    $('#date-entrer-et-heure-embauche').editable({
        placement: 'right',
        combodate: {
            firstItem: 'name'
        }
    }); 
    
    
      $('#date-sortie').editable({
        datepicker: {
            todayBtn: 'linked'
        } 
    });  
     $('#date-anciennete').editable({
        datepicker: {
            todayBtn: 'linked'
        } 
    });  
    $('#motif').editable({
        prepend: "champ non remplis",
        source: [
            {value: 1, text: ''},
            {value: 2, text: ''},
	    
	    
        ],
	   display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue", 3: "pink"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });     
    $('#groupe').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'groupe',
           title: 'Entrer groupe'
});
$('#secteur').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'secteur',
           title: 'Entrer secteur'
});
		
		
		//SALAIRES
		
	$('#type-paye').editable({
        prepend: "champ non remplis",
        source: [
            {value: 1, text: 'Mensuel'},
            {value: 2, text: 'Horaire'},
	    {value: 3, text: 'Par point '},
	    {value: 4, text: 'Partiel'},
	    {value: 5, text: 'Autre'}
	    
        ],
	   display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue", 3: "pink"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });     	
    $('#salaire-base').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'salaire-base',
           title: 'Entrer salaire de base'
});
    $('#employeur').editable({
        prepend: "champ non remplis",
        source: [
            {value: 1, text: 'Employeur unique'},
            {value: 2, text: 'Employeur multiple'},
	    {value: 3, text: 'Situation non reconnu '}
	    
        ],
	   display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue", 3: "pink"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });     
     $('#montant-percu').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'montant-percu',
           title: ' montant-percu'
});
$('#emplois').editable({
        prepend: "champ non remplis",
        source: [
            {value: 1, text: 'Emplois unique'},
            {value: 2, text: 'Emplois multiples'},
	    {value: 3, text: 'Situation non reconnu '}
	    
        ],
	   display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue", 3: "pink"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });     
    $('#nature-contrat').editable({
        prepend: "champ non remplis",
        source: [
            {value: 1, text: 'contrat a duree indeterminee'},
            {value: 2, text: 'contrat a duree determinee'}
	    
        ],
	   display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue", 3: "pink"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });
    $('#duree-travail-contractuelle').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'duree-travail-contractuelle',
           title: ' duree-travail-contractuelle'
});
    $('#intitulabbe-contrat').editable({
        prepend: "champ non remplis",
        source: [
            {value: 1, text: 'contrat a duree indeterminee'},
            {value: 2, text: 'contrat a duree determinee'}
	    
        ],
	   display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue", 3: "pink"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });
    
				//BULLETIN
				
	
	$('#convetion-collective').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'convetion-collective',
           title: ' convetion-collective'
});
	$('#code-convetion-collective').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'code-convetion-collective',
           title: ' code convetion collective'
});
	$('#avantages-nourriture').editable({
        prepend: "champ non remplis",
        source: [
            {value: 1, text: 'oui'},
            {value: 2, text: 'non'}
	    
        ],
	   display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue", 3: "pink"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });
    $('#avantages-logement').editable({
        prepend: "champ non remplis",
        source: [
            {value: 1, text: 'oui'},
            {value: 2, text: 'non'}
	    
        ],
	   display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue", 3: "pink"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });
    $('#avantages-vehicule').editable({
        prepend: "champ non remplis",
        source: [
            {value: 1, text: 'oui'},
            {value: 2, text: 'non'}
	    
        ],
	   display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue", 3: "pink"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });
    $('#avantages-autre').editable({
        prepend: "champ non remplis",
        source: [
            {value: 1, text: 'oui'},
            {value: 2, text: 'non'}
	    
        ],
	   display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue", 3: "pink"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });
     $('#frais-forfait').editable({
        prepend: "champ non remplis",
        source: [
            {value: 1, text: 'oui'},
            {value: 2, text: 'non'}
	    
        ],
	   display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue", 3: "pink"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });
    $('#frais-remboursement').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'frais-remboursement',
           title: ' Frais-remboursement'
});
$('#frais-avantage-salarie').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'frais-avantage-salarie',
           title: ' Frais-avantage-salarie'
});
     $('#pourboire').editable({
        prepend: "champ non remplis",
        source: [
            {value: 1, text: 'oui'},
            {value: 2, text: 'non'}
	    
        ],
	   display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue", 3: "pink"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });
    
    $('#absence-montant').editable({
        prepend: "Donnee manquante",
        source: [
            {value: 1, text: 'sans'},
            {value: 2, text: ' '}
	    
        ],
	   display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue", 3: "pink"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });
				//DADS
				
	$('#code-CIPDZ').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'code-CIPDZ',
           title: ' code CIPDZ'
});
$('#Code-etranger').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'Code-etranger',
           title: ' Code etranger'
});
$('#code-INSEE-emploi').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'code-INSEE-emploi',
           title: ' code INSEE emploi'
});
$('#code-INSEE-commun').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'code-INSEE-commun',
           title: ' code INSEE commun'
});

	//PLANING EVENMENT

$('#planing-evenment1').editable({
        prepend: "champ non remplis",
        source: [
            {value: 1, text: 'CONGE'},
            {value: 2, text: 'MALADIE'},
	    {value: 3, text: 'MATERNITE'},
	    {value: 4, text: 'FORFAIT'},
	    {value: 5, text: 'ACCIDENT'},
	    {value: 6, text: 'CONGE SANS SOLDE'}
        ],
        display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });    

$('#planing-evenment2').editable({
        prepend: "CONGE",
        source: [
            {value: 1, text: 'CONGE'},
            {value: 2, text: 'MALADIE'},
	    {value: 3, text: 'MATERNITE'},
	    {value: 4, text: 'FORFAIT'},
	    {value: 5, text: 'ACCIDENT'},
	    {value: 6, text: 'CONGE SANS SOLDE'}
        ],
        display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });    
    $('#planing-evenment3').editable({
        prepend: "champ non remplis",
        source: [
            {value: 1, text: 'CONGE'},
            {value: 2, text: 'MALADIE'},
	    {value: 3, text: 'MATERNITE'},
	    {value: 4, text: 'FORFAIT'},
	    {value: 5, text: 'ACCIDENT'},
	    {value: 6, text: 'CONGE SANS SOLDE'}
        ],
        display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });    
    $('#planing-evenment4').editable({
        prepend: "MATERNITE",
        source: [
            {value: 1, text: 'CONGE'},
            {value: 2, text: 'MALADIE'},
	    {value: 3, text: 'MATERNITE'},
	    {value: 4, text: 'FORFAIT'},
	    {value: 5, text: 'ACCIDENT'},
	    {value: 6, text: 'CONGE SANS SOLDE'}
        ],
        display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });    
    $('#planing-evenment5').editable({
        prepend: "champ non remplis",
        source: [
            {value: 1, text: 'CONGE'},
            {value: 2, text: 'MALADIE'},
	    {value: 3, text: 'MATERNITE'},
	    {value: 4, text: 'FORFAIT'},
	    {value: 5, text: 'ACCIDENT'},
	    {value: 6, text: 'CONGE SANS SOLDE'}
        ],
        display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });    
    $('#planing-evenment6').editable({
        prepend: "champ non remplis",
        source: [
            {value: 1, text: 'CONGE'},
            {value: 2, text: 'MALADIE'},
	    {value: 3, text: 'MATERNITE'},
	    {value: 4, text: 'FORFAIT'},
	    {value: 5, text: 'ACCIDENT'},
	    {value: 6, text: 'CONGE SANS SOLDE'}
        ],
        display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });    
    $('#planing-evenment7').editable({
        prepend: "champ non remplis",
        source: [
            {value: 1, text: 'CONGE'},
            {value: 2, text: 'MALADIE'},
	    {value: 3, text: 'MATERNITE'},
	    {value: 4, text: 'FORFAIT'},
	    {value: 5, text: 'ACCIDENT'},
	    {value: 6, text: 'CONGE SANS SOLDE'}
        ],
        display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });    



    
		//CLIENT FICHE EDITABLE
		
		//identification
    
    $('#raison-sociale').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'raison-sociale',
           title: 'Entrer raison-sociale'
    });
     $('#type').editable({
        prepend: "champ non remplis",
        source: [
            {value: 1, text: 'Personne morale'},
             {value: 2, text: 'Personne physique'}
	    
        ],
	   display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });
     $('#forme-juridique').editable({
        prepend: "champ non remplis",
        source: [
            {value: 1, text: 'Association'},
            {value: 2, text: 'E.U.R.L'},
	    {value: 3, text: 'S.A'},
	    {value: 4, text: 'S.A.R.L'},
            {value: 5, text: 'S.C.I'},
	    {value: 6, text: 'S.N.C'}
	    
        ],
	   display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue", 3: "pink", 4: "red" , 5: "gray", 6: "yellow"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });
     $('#siret').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'siret',
           title: 'Entrer numero Siret'
    });
    $('#activite').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'activite',
           title: 'Entrer activite'
    });
    $('#code-naf').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'code-naf',
           title: 'Entrer ville'
    });
    
    $('#ville').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'ville',
           title: 'Entrer ville'
    });
    
    $ ('#telephone2').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'telephone2',
           title: 'Entrer numero telephone 2'
    });
     $ ('#fax').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'fax',
           title: 'Entrer numero fax '
    });
			// contact
    $ ('#personne-contact').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'personne-contact',
           title: 'personne contact '
    });
    
			//temporaire
    $('#nace').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'nace',
           title: 'Entrer NACE'
    });
    $('#ref-urssaf').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'ref-urssaf',
           title: 'Entrer reference urssaf'
    });
    $('#n-urssaf').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'n-urssaf',
           title: 'Entrer numero urssaf'
    });
     $('#code-urssaf').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'code-urssaf',
           title: 'Entrer code urssaf'
    });
     $('#agrement-asnp').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'agrement-asnp',
           title: 'Entrer agrement asnp'
    });
	
    
    
    
    
    
    
    
    
    
	//AUTRE DONNEES
	
    
    
    
    $('#status').editable();   
    
    $('#group').editable({
       showbuttons: false 
    });   

    $('#vacation').editable({
        datepicker: {
            todayBtn: 'linked'
        } 
    });  
        
    $('#dob').editable();
          
    $('#event').editable({
        placement: 'right',
        combodate: {
            firstItem: 'name'
        }
    });      
    
    $('#meeting_start').editable({
        format: 'yyyy-mm-dd hh:ii',    
        viewformat: 'dd/mm/yyyy hh:ii',
        validate: function(v) {
           if(v && v.getDate() == 10) return 'Day cant be 10!';
        },
        datetimepicker: {
           todayBtn: 'linked',
           weekStart: 1
        }        
    });            
    
    $('#comments').editable({
        showbuttons: 'bottom'
    }); 
    
    $('#note').editable(); 
    $('#pencil').click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        $('#note').editable('toggle');
   }); 

   
   
    $('#state').editable({
        source: ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Dakota","North Carolina","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]
    }); 
    
    $('#state2').editable({
        value: 'California',
        typeahead: {
            name: 'state',
            local: ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Dakota","North Carolina","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]
        }
    });   
   
   $('#fruits').editable({
       pk: 1,
       limit: 3,
       source: [
        {value: 1, text: 'banana'},
        {value: 2, text: 'peach'},
        {value: 3, text: 'apple'},
        {value: 4, text: 'watermelon'},
        {value: 5, text: 'orange'}
       ]
    }); 
    
    $('#tags').editable({
        inputclass: 'input-large',
        select2: {
            tags: ['html', 'javascript', 'css', 'ajax'],
            tokenSeparators: [",", " "]
        }
    });   

    var countries = [];
    $.each({"BD": "Bangladesh", "BE": "Belgium", "BF": "Burkina Faso", "BG": "Bulgaria", "BA": "Bosnia and Herzegovina", "BB": "Barbados", "WF": "Wallis and Futuna", "BL": "Saint Bartelemey", "BM": "Bermuda", "BN": "Brunei Darussalam", "BO": "Bolivia", "BH": "Bahrain", "BI": "Burundi", "BJ": "Benin", "BT": "Bhutan", "JM": "Jamaica", "BV": "Bouvet Island", "BW": "Botswana", "WS": "Samoa", "BR": "Brazil", "BS": "Bahamas", "JE": "Jersey", "BY": "Belarus", "O1": "Other Country", "LV": "Latvia", "RW": "Rwanda", "RS": "Serbia", "TL": "Timor-Leste", "RE": "Reunion", "LU": "Luxembourg", "TJ": "Tajikistan", "RO": "Romania", "PG": "Papua New Guinea", "GW": "Guinea-Bissau", "GU": "Guam", "GT": "Guatemala", "GS": "South Georgia and the South Sandwich Islands", "GR": "Greece", "GQ": "Equatorial Guinea", "GP": "Guadeloupe", "JP": "Japan", "GY": "Guyana", "GG": "Guernsey", "GF": "French Guiana", "GE": "Georgia", "GD": "Grenada", "GB": "United Kingdom", "GA": "Gabon", "SV": "El Salvador", "GN": "Guinea", "GM": "Gambia", "GL": "Greenland", "GI": "Gibraltar", "GH": "Ghana", "OM": "Oman", "TN": "Tunisia", "JO": "Jordan", "HR": "Croatia", "HT": "Haiti", "HU": "Hungary", "HK": "Hong Kong", "HN": "Honduras", "HM": "Heard Island and McDonald Islands", "VE": "Venezuela", "PR": "Puerto Rico", "PS": "Palestinian Territory", "PW": "Palau", "PT": "Portugal", "SJ": "Svalbard and Jan Mayen", "PY": "Paraguay", "IQ": "Iraq", "PA": "Panama", "PF": "French Polynesia", "BZ": "Belize", "PE": "Peru", "PK": "Pakistan", "PH": "Philippines", "PN": "Pitcairn", "TM": "Turkmenistan", "PL": "Poland", "PM": "Saint Pierre and Miquelon", "ZM": "Zambia", "EH": "Western Sahara", "RU": "Russian Federation", "EE": "Estonia", "EG": "Egypt", "TK": "Tokelau", "ZA": "South Africa", "EC": "Ecuador", "IT": "Italy", "VN": "Vietnam", "SB": "Solomon Islands", "EU": "Europe", "ET": "Ethiopia", "SO": "Somalia", "ZW": "Zimbabwe", "SA": "Saudi Arabia", "ES": "Spain", "ER": "Eritrea", "ME": "Montenegro", "MD": "Moldova, Republic of", "MG": "Madagascar", "MF": "Saint Martin", "MA": "Morocco", "MC": "Monaco", "UZ": "Uzbekistan", "MM": "Myanmar", "ML": "Mali", "MO": "Macao", "MN": "Mongolia", "MH": "Marshall Islands", "MK": "Macedonia", "MU": "Mauritius", "MT": "Malta", "MW": "Malawi", "MV": "Maldives", "MQ": "Martinique", "MP": "Northern Mariana Islands", "MS": "Montserrat", "MR": "Mauritania", "IM": "Isle of Man", "UG": "Uganda", "TZ": "Tanzania, United Republic of", "MY": "Malaysia", "MX": "Mexico", "IL": "Israel", "FR": "France", "IO": "British Indian Ocean Territory", "FX": "France, Metropolitan", "SH": "Saint Helena", "FI": "Finland", "FJ": "Fiji", "FK": "Falkland Islands (Malvinas)", "FM": "Micronesia, Federated States of", "FO": "Faroe Islands", "NI": "Nicaragua", "NL": "Netherlands", "NO": "Norway", "NA": "Namibia", "VU": "Vanuatu", "NC": "New Caledonia", "NE": "Niger", "NF": "Norfolk Island", "NG": "Nigeria", "NZ": "New Zealand", "NP": "Nepal", "NR": "Nauru", "NU": "Niue", "CK": "Cook Islands", "CI": "Cote d'Ivoire", "CH": "Switzerland", "CO": "Colombia", "CN": "China", "CM": "Cameroon", "CL": "Chile", "CC": "Cocos (Keeling) Islands", "CA": "Canada", "CG": "Congo", "CF": "Central African Republic", "CD": "Congo, The Democratic Republic of the", "CZ": "Czech Republic", "CY": "Cyprus", "CX": "Christmas Island", "CR": "Costa Rica", "CV": "Cape Verde", "CU": "Cuba", "SZ": "Swaziland", "SY": "Syrian Arab Republic", "KG": "Kyrgyzstan", "KE": "Kenya", "SR": "Suriname", "KI": "Kiribati", "KH": "Cambodia", "KN": "Saint Kitts and Nevis", "KM": "Comoros", "ST": "Sao Tome and Principe", "SK": "Slovakia", "KR": "Korea, Republic of", "SI": "Slovenia", "KP": "Korea, Democratic People's Republic of", "KW": "Kuwait", "SN": "Senegal", "SM": "San Marino", "SL": "Sierra Leone", "SC": "Seychelles", "KZ": "Kazakhstan", "KY": "Cayman Islands", "SG": "Singapore", "SE": "Sweden", "SD": "Sudan", "DO": "Dominican Republic", "DM": "Dominica", "DJ": "Djibouti", "DK": "Denmark", "VG": "Virgin Islands, British", "DE": "Germany", "YE": "Yemen", "DZ": "Algeria", "US": "United States", "UY": "Uruguay", "YT": "Mayotte", "UM": "United States Minor Outlying Islands", "LB": "Lebanon", "LC": "Saint Lucia", "LA": "Lao People's Democratic Republic", "TV": "Tuvalu", "TW": "Taiwan", "TT": "Trinidad and Tobago", "TR": "Turkey", "LK": "Sri Lanka", "LI": "Liechtenstein", "A1": "Anonymous Proxy", "TO": "Tonga", "LT": "Lithuania", "A2": "Satellite Provider", "LR": "Liberia", "LS": "Lesotho", "TH": "Thailand", "TF": "French Southern Territories", "TG": "Togo", "TD": "Chad", "TC": "Turks and Caicos Islands", "LY": "Libyan Arab Jamahiriya", "VA": "Holy See (Vatican City State)", "VC": "Saint Vincent and the Grenadines", "AE": "United Arab Emirates", "AD": "Andorra", "AG": "Antigua and Barbuda", "AF": "Afghanistan", "AI": "Anguilla", "VI": "Virgin Islands, U.S.", "IS": "Iceland", "IR": "Iran, Islamic Republic of", "AM": "Armenia", "AL": "Albania", "AO": "Angola", "AN": "Netherlands Antilles", "AQ": "Antarctica", "AP": "Asia/Pacific Region", "AS": "American Samoa", "AR": "Argentina", "AU": "Australia", "AT": "Austria", "AW": "Aruba", "IN": "India", "AX": "Aland Islands", "AZ": "Azerbaijan", "IE": "Ireland", "ID": "Indonesia", "UA": "Ukraine", "QA": "Qatar", "MZ": "Mozambique"}, function(k, v) {
        countries.push({id: k, text: v});
    }); 
    $('#country').editable({
        source: countries,
        select2: {
            width: 200
        } 
    });      


    
    $('#address').editable({
        url: '/post',
        value: {
            city: "Moscow", 
            street: "Lenina", 
            building: "12"
        },
        validate: function(value) {
            if(value.city == '') return 'city is required!'; 
        },
        display: function(value) {
            if(!value) {
                $(this).empty();
                return; 
            }
            var html = '<b>' + $('<div>').text(value.city).html() + '</b>, ' + $('<div>').text(value.street).html() + ' st., bld. ' + $('<div>').text(value.building).html();
            $(this).html(html); 
        }         
    });              
         
   $('#user .editable').on('hidden', function(e, reason){
        if(reason === 'save' || reason === 'nochange') {
            var $next = $(this).closest('tr').next().find('.editable');
            if($('#autoopen').is(':checked')) {
                setTimeout(function() {
                    $next.editable('show');
                }, 300); 
            } else {
                $next.focus();
            } 
        }
   });
   
});