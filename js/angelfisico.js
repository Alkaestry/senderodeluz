///***SCRIPT PARA ENCONTRAR EL GENIO FISICO, SEGUN DÍA DE NACIMIENTO***///
    
    

function GenioFisico(){
var _mes = parseInt(fecha.value.substring(5,7));
var _dia = parseInt(fecha.value.substring(8,10));
//ENERO:
if (_mes == 1){
	if (_dia >= 1 && _dia <= 5){
		GenioKab.innerHTML = "<b>NEMAMIAH</b><br/>נממיה";
        salmo.innerHTML = "<b>Salmo (145:14) Sostiene el Eterno a todos los que caen, y levanta a todos los oprimidos.<br/><i>Somekh ADONAI lekhol-hanoflim vezokef lekhol-hakefufim</i></b>";
	}
	if (_dia >= 6 && _dia <= 10){
		GenioKab.innerHTML = "<b>YEIALEL</b><br/>יילאל";
        salmo.innerHTML = "<b>Salmo (113:2) Sea el nombre del Eterno bendito desde ahora y para siempre.<br/><i>Yehi shem ADONAI mevorakh meata vead-olam	</i></b>";
	}
	if (_dia >= 11 && _dia <= 15){
		GenioKab.innerHTML = "<b>HARAJEL</b><br/>הרחאל";
        salmo.innerHTML = "<b>Salmo (94:22) Mas el Eterno fue mi refugio, y mi D'ios la roca de mi amparo.<br/><i>Vayihi ADONAI li lemisgav velohai letzur mahhsi</i></b>";
	}
	if (_dia >= 16 && _dia <= 20){
		GenioKab.innerHTML = "<b>MITZRAEL</b><br/>מצראל";
        salmo.innerHTML = "<b>Salmo (34:17) La ira del Eterno está sobre los que hacen el mal, para borrar su memoria de la tierra.<br/><i>Penéi ADONAI beose ra lehakhrit meeretz zikhram</i></b>";
	}
	if (_dia >= 21 && _dia <= 25){
		GenioKab.innerHTML = "<b>UMABEL</b><br/>ומבאל";
        salmo.innerHTML = "<b>Salmo (8:10) ¡Oh Eterno, señor nuestro, Cuán grande es tu nombre en toda la tierra!<br/><i>ADONAI adonenu ma-adir shimkha bekhol-haaretz</i></b>";
	}
	if (_dia >= 26 && _dia <= 30){
		GenioKab.innerHTML = "<b>YAH-HEL</b><br/>יההאל";
        salmo.innerHTML = "<b>Salmo (24:5) Él recibirá bendiciones del Eterno, y justicia del D'ios de salvación.<br/><i>Yisa verakha meet ADONAI utzdaka meelohe yisho</i></b>";
	}
	if (_dia == 31){
		GenioKab.innerHTML = "<b>ANAUEL</b><br/>ענואל";
        salmo.innerHTML = "<b>Salmo (37:4) Deléitate asimismo en el Eterno, y Él te concederá las peticiones de tu corazón.<br/><i>Vehitanag al-ADONAI veyiten-lekha mishalot libekha</i></b>";
	}	
}
//FEBRERO:
if (_mes == 2){
	if (_dia >= 1 && _dia <= 4){
		GenioKab.innerHTML = "<b>ANAUEL</b><br/>ענואל";
        salmo.innerHTML = "<b><b>Salmo (37:4) Deléitate asimismo en el Eterno, y Él te concederá las peticiones de tu corazón.<br/><i>Vehitanag al-ADONAI veyiten-lekha mishalot libekha</i></b>";
	}
	if (_dia >= 5 && _dia <= 9){
		GenioKab.innerHTML = "<b>MEJIEL</b><br/>מחיאל";
        salmo.innerHTML = "<b>Salmo (30:11) Oye, oh Eterno, y ten misericordia de mí; Adonay, sé tú mi ayuda.<br/><i>Shemá-ADONAI vehhoneni ADONAI heye-ozer li</i></b>";
	}
	if (_dia >= 10 && _dia <= 14){
		GenioKab.innerHTML = "<b>DAMABIAH</b><br/>דמביה";
        salmo.innerHTML = "<b>Salmo (90:13) Vuélvete, oh Eterno; ¿hasta cuándo? Y apiádate de tus siervos.<br/><i>Shuva ADONAI ad-matai vehinahhem al-avadekha</i></b>";
	}
	if (_dia >= 15 && _dia <= 19){
		GenioKab.innerHTML = "<b>MANAQEL</b><br/>מנקאל";
        salmo.innerHTML = "<b>Salmo (87:2) Ama el Eterno las puertas de Sion más que todas las moradas de Jacob.<br/><i>Ohev ADONAI shaare tziyon mikol mishkenot yaakov</i></b>";
	}
	if (_dia >= 20 && _dia <= 24){
		GenioKab.innerHTML = "<b>EYAEL</b><br/>איעאל";
        salmo.innerHTML = "<b>Salmo (18:47) Viva el Eterno, y bendita sea mi roca, y enaltecido sea el D'ios de mi salvación.<br/><i>Jai-ADONAI uvarukh tzuri veyarum elohe yishi</i></b>";
	}
	if (_dia >= 25 && _dia <= 29){
		GenioKab.innerHTML = "<b>JABUYAH</b><br/>חבויה";
        salmo.innerHTML = "<b>Salmo (132:13) Porque el Eterno ha elegido a Sion; la quiso para su morada.<br/><i>Ki-vahhar ADONAI betziyon iva lemoshav lo</i></b>";
	}
}
//MARZO:
if (_mes == 3){
	if (_dia == 1){
		GenioKab.innerHTML = "<b>JABUYAH</b><br/>חבויה";
        salmo.innerHTML = "<b>Salmo (132:13) Porque el Eterno ha elegido a sion; la quiso para su morada.<br/><i>Ki-vahhar ADONAI betziyon iva lemoshav lo</i></b>";
	}
	if (_dia >= 2 && _dia <= 6){
		GenioKab.innerHTML = "<b>ROHEL</b><br/>ראהאל";
        salmo.innerHTML = "<b>Salmo (119:145) Clamé con todo mi corazón; respóndeme, Eterno, y guardaré tus estatutos.<br/><i>Karati vekhol-lev aneni ADONAI hhukekha etzora</i></b>";
	}
	if (_dia >= 7 && _dia <= 11){
		GenioKab.innerHTML = "<b>YABAMIAH</b><br/>יבמיה";
        salmo.innerHTML = "<b>Salmo (145:17) Justo es el Eterno en todos sus caminos, y misericordioso en todas sus obras.<br/><i>Tzadik ADONAI bekhol-derakhav vehhasid bekhol-maasav</i></b>";
	}
	if (_dia >= 12 && _dia <= 16){
		GenioKab.innerHTML = "<b>HAIAIEL</b><br/>הייאל";
        salmo.innerHTML = "<b>Salmo (121:5) El Eterno es tu protector; el Eterno es tu sombra a tu diestra.<br/><i>ADONAI shomrekha ADONAI tzilekha al-yad yeminekha</i></b>";
	}
	if (_dia >= 17 && _dia <= 21){
		GenioKab.innerHTML = "<b>MUMIAH</b><br/>מומיה";
        salmo.innerHTML = "<b>Salmo (131:3) Espera, oh Israel al Eterno, desde ahora y para siempre.<br/><i>Yajel yisrael el-ADONAI meata vead-olam</i></b>";
	}
	if (_dia >= 22 && _dia <= 25){
		GenioKab.innerHTML = "<b>VEHUIAH</b><br/>והויה";
        salmo.innerHTML = "<b>Salmo (3:4) Mas tú, Eterno, eres escudo alrededor de mí; mi gloria, y el que levanta mi cabeza.<br/><i>Veata ADONAI magen baadi kevodi umerim roshi</i></b>";
	}
	if (_dia >= 26 && _dia <= 30){
		GenioKab.innerHTML = "<b>YELIEL</b><br/>יליאל";
        salmo.innerHTML = "<b>Salmo (22:20) Mas tú, Eterno, no te alejes; fortaleza mía, apresúrate a socorrerme.<br/><i>Veata ADONAI al-tirjak eyaluti leezratI hhusha</i></b>";
	}
	if (_dia == 31){
		GenioKab.innerHTML = "<b>Sitael</b><br/>סיטאל";
        salmo.innerHTML = "<b>Salmo (91:2) Diré yo al Eterno, esperanza mía, y castillo mío; mi D'ios, en quien confiaré.<br/><i>Omar lADONAI mahhsi umtzudati elohai evtahh-bo</i></b>";
	}
}
//ABRIL:
if (_mes == 4){
	if (_dia >= 1 && _dia <= 4){
		GenioKab.innerHTML = "<b>Sitael</b><br/>סיטאל";
        salmo.innerHTML = "<b>Salmo (91:2) Diré yo al Eterno, esperanza mía, y castillo mío; mi D'ios, en quien confiaré.<br/><i>Omar lADONAI mahhsi umtzudati elohai evtahh-bo</i></b>";
	}
	if (_dia >= 5 && _dia <= 9){
		GenioKab.innerHTML = "<b>Elemiah</b><br/>עלמיה";
        salmo.innerHTML = "<b>Salmo (34:16) Los ojos del Eterno están sobre los justos, y atentos sus oídos al clamor de ellos.<br/><i>Ené ADONAI el-tzadikim veoznav el-shavatam</i></b>";
	}
	if (_dia >= 10 && _dia <= 15){
		GenioKab.innerHTML = "<b>Mahasiah</b><br/>מהשיה";
        salmo.innerHTML = "<b>	Salmo (80:20) ¡Oh Eterno, D'ios de los ejércitos, restáuranos! Haz resplandecer tu rostro, y seremos salvados.<br/><i>ADONAI elohim tzevaot hashivenu haer panekha venivashea</i></b>";
	}
	if (_dia >= 16 && _dia <= 20){
		GenioKab.innerHTML = "<b>Lelahel</b><br/>ללהאל";
        salmo.innerHTML = "<b>Salmo (86:3) Ten misericordia de mí, oh señor; porque a ti clamo todo el día.<br/><i>Joneni Adonai ki elekha ekra kol-hayom</i></b>";
	}
	if (_dia >= 21 && _dia <= 25){
		GenioKab.innerHTML = "<b>Akayah</b><br/>אכאיה";
        salmo.innerHTML = "<b>Salmo (3:6) Yo me acosté y dormí, desperté porque el Eterno me sustentaba.<br/><i>Aní shakhavti vaishana hekitzoti ki ADONAI yismekheni</i></b>";
	}
	if (_dia >= 26 && _dia <= 30){
		GenioKab.innerHTML = "<b>Kahetel</b><br/>כהתאל";
        salmo.innerHTML = "<b>Salmo (119:75) Yo sabía, Eterno, que tus juicios son justos, y acepté con fe cuando me afligiste.<br/><i>Yadati ADONAI ki-tzedek mishpatekha veemuna initani</i></b>";
	}
}
//MAYO:
if (_mes == 5){
	if (_dia >= 1 && _dia <= 5){
		GenioKab.innerHTML = "<b>Haziel</b><br/>הזיאל";
        salmo.innerHTML = "<b>Salmo (88:15) ¿Por qué, oh Eterno, desechas mi alma? ¿Por qué escondes de mí tu rostro?<br/><i>Lama ADONAI tiznahh nafshi tastir panekha mimeni</i></b>";
	}
	if (_dia >= 6 && _dia <= 11){
		GenioKab.innerHTML = "<b>Aladiah</b><br/>אלדיה";
        salmo.innerHTML = "<b>Salmo (88:2) Oh Eterno, D'ios de mi salvación, día y noche clamo delante de ti.<br/><i>ADONAI elohe yeshuati yom-tzaakti valayla negdekha</i></b>";
	}
	if (_dia >= 12 && _dia <= 16){
		GenioKab.innerHTML = "<b>Lauviah</b><br/>לאויה";
        salmo.innerHTML = "<b>Salmo (27:13) Hubiera yo desmayado, si no creyese que veré la bondad del Eterno en la tierra de los vivientes.<br/><i>Lule heemanti lirot betuv-ADONAI beeretz hhayim</i></b>";
	}
	if (_dia >= 17 && _dia <= 21){
		GenioKab.innerHTML = "<b>Hahayah</b><br/>ההעיה";
        salmo.innerHTML = "<b>Salmo (6:5) Vuélvete, oh Eterno, libra mi alma; sálvame por tu misericordia.<br/><i>Shuva ADONAI hhaletza nafshi hoshieni lemaan hhasdekha</i></b>";
	}
	if (_dia >= 22 && _dia <= 26){
		GenioKab.innerHTML = "<b>Yezael</b><br/>יזלאל";
        salmo.innerHTML = "<b>Salmo (104:16) Se llenan de savia los árboles del Eterno, los cedros del Líbano que Él plantó.<br/><i>Yisbeu atze ADONAI arze levanon asher nata</i></b>";
	}
	if (_dia >= 27 && _dia <= 31){
		GenioKab.innerHTML = "<b>Mebahel</b><br/>מבהאל";
        salmo.innerHTML = "<b>Salmo (9:10) Será el Eterno refugio al humilde, refugio para el tiempo de angustia.<br/><i>Vihi ADONAI misgav ladakh misgav leitot batzara</i></b>";
	}
}
//JUNIO:
if (_mes == 6){
	if (_dia >= 1 && _dia <= 6){
		GenioKab.innerHTML = "<b>Hariel</b><br/>הריאל";
        salmo.innerHTML = "<b>Salmo (128:4) He aquí que así será bendecido el hombre que teme al Eterno.<br/><i>Hine khi-khen yevorakh gaver yere ADONAI</i></b>";
	}
	if (_dia >= 7 && _dia <= 11){
		GenioKab.innerHTML = "<b>Hekamiah</b><br/>הקמיה";
        salmo.innerHTML = "<b>Salmo (10:1) ¿Por qué estás lejos, oh Eterno, y te escondes en el tiempo de la tribulación?<br/><i>Lama ADONAI taamod berajok talim leitot batzara</i></b>";
	}
	if (_dia >= 12 && _dia <= 16){
		GenioKab.innerHTML = "<b>Leuyah</b><br/>לאויה";
        salmo.innerHTML = "<b>Salmo (105:1) Alabad al Eterno, invocad su nombre; dad a conocer sus obras en los pueblos.<br/><i>Hodu lADONAI kiru bishmo hodiu vaamim alilotav</i></b>";
	}
	if (_dia >= 17 && _dia <= 21){
		GenioKab.innerHTML = "<b>Kaliel</b><br/>כליאל";
        salmo.innerHTML = "<b>Salmo (103:21) Bendecid al Eterno, vosotros todos sus ejércitos, ministros suyos, que hacéis su voluntad.<br/><i>Barakhu ADONAI kol-tzevaav mesharetav ose retzono</i></b>";
	}
	if (_dia >= 22 && _dia <= 27){
		GenioKab.innerHTML = "<b>Leuviah</b><br/>לוויה";
        salmo.innerHTML = "<b>Salmo (40:2) Pacientemente esperé al Eterno, y se inclinó a mí, y oyó mi clamor.<br/><i>Kavo kiviti ADONAI vayet elai vayishma shavati</i></b>";
	}
	if (_dia >= 28 && _dia <= 30){
		GenioKab.innerHTML = "<b>Pahaliah</b><br/>פהליה";
        salmo.innerHTML = "<b>Salmo (119:108)Te ruego, oh Eterno, que te sean agradables los sacrificios voluntarios de mi boca, y me enseñes tus juicios.<br/><i>Nidvot pi retze-na ADONAI umishpatekha lamedeni</i></b>";
	}	
}
//JULIO:
if (_mes == 7){
	if (_dia >= 1 && _dia <= 2){
		GenioKab.innerHTML = "<b>Pahaliah</b><br/>פהליה";
        salmo.innerHTML = "<b>Salmo (119:108)Te ruego, oh Eterno, que te sean agradables los sacrificios voluntarios de mi boca, y me enseñes tus juicios.<br/><i>Nidvot pi retze-na ADONAI umishpatekha lamedeni</i></b>";
	}
	if (_dia >= 3 && _dia <= 7){
		GenioKab.innerHTML = "<b>Nelkael</b><br/>נלכאל";
        salmo.innerHTML = "<b>Salmo (18:50) Por tanto yo te confesaré entre las naciones, oh Eterno, y cantaré a tu nombre.	<br/><i>Al-ken odkha vagoyim ADONAI ulshimkha azamera</i></b>";
	}
	if (_dia >= 8 && _dia <= 12){
		GenioKab.innerHTML = "<b>Yeiyayel</b><br/>יייאל";
        salmo.innerHTML = "<b>Salmo (147:11) Se complace el Eterno en los que le temen, y en los que esperan en su misericordia.<br/><i>Rotze ADONAI et-yereav et-hameyajalim lejasdo</i></b>";
	}
	if (_dia >= 13 && _dia <= 18){
		GenioKab.innerHTML = "<b>Melahel</b><br/>מלהאל";
        salmo.innerHTML = "<b>Salmo (118:24) Este es el día que hizo el Eterno; gozaremos y nos alegraremos en él.<br/><i>Ze-hayom asa ADONAI nagila venismeja vo</i></b>";
	}
	if (_dia >= 19 && _dia <= 23){
		GenioKab.innerHTML = "<b>Jaheuyah</b><br/>חהויה";
        salmo.innerHTML = "<b>Salmo (95:6) Venid, adoremos y postrémonos; arrodillémonos delante del Eterno nuestro Hacedor.<br/><i>Bou nishtahhave venikhraa nivrekha lifne-ADONAI osenu</i></b>";
	}
	if (_dia >= 24 && _dia <= 28){
		GenioKab.innerHTML = "<b>Nit-Hayah</b><br/>נתהיה";
        salmo.innerHTML = "<b>Salmo (34:5) Busqué al Eterno, y Él me oyó, y me libró de todos mis temores.<br/><i>Darashti et-ADONAI veanani umikol-megurotai hitzilani</i></b>";
	}
	if (_dia >= 29 && _dia <= 31){
		GenioKab.innerHTML = "<b>Haayah</b><br/>האאיה";
        salmo.innerHTML = "<b>Salmo (97:1) El Eterno reina; regocíjese la tierra, alégrense las numerosas costas.<br/><i> ADONAI malakh tagel haaretz yismeju iyim rabim</i></b>";
	}	
}
//AGOSTO:
if (_mes == 8){
	if (_dia >= 1 && _dia <= 2){
		GenioKab.innerHTML = "<b>Haayah</b><br/>האאיה";
        salmo.innerHTML = "<b>Salmo (97:1) El Eterno reina; regocíjese la tierra, alégrense las numerosas costas.<br/><i> ADONAI malakh tagel haaretz yismeju iyim rabim</i></b>";
	}
	if (_dia >= 3 && _dia <= 7){
		GenioKab.innerHTML = "<b>Yeratel</b><br/>ירתאל";
        salmo.innerHTML = "<b>Salmo (140:2)Líbrame, oh Eterno, del hombre malo; guárdame de hombres violentos.<br/><i>Jaletzeni ADONAI meadam ra meish jamasim tintzereni</i></b>";
	}
	if (_dia >= 8 && _dia <= 13){
		GenioKab.innerHTML = "<b>Seheyah</b><br/>שאהיה";
        salmo.innerHTML = "<b>Salmo (35:24) Júzgame conforme a tu justicia, Eterno D'ios mío, y no se alegren de mí.<br/><i>Shafteni khetzidkekha ADONAI elohai veal-yismeju-li</i></b>";
	}
	if (_dia >= 14 && _dia <= 18){
		GenioKab.innerHTML = "<b>Reiyel</b><br/>רייאל";
        salmo.innerHTML = "<b>Salmo (9:12) Cantad al Eterno, que habita en Sion; relatad entre los pueblos sus obras.<br/><i>Zameru lADONAI yoshev tziyon hagidu vaamim alilotav</i></b>";
	}
	if (_dia >= 19 && _dia <= 23){
		GenioKab.innerHTML = "<b>Omael</b><br/>אומאל";
        salmo.innerHTML = "<b>Salmo (7:18) Alabaré al Eterno conforme a su justicia, y cantaré al nombre del Eterno el Altísimo.<br/><i>Odé ADONAI ketzidko vaazamera shem-ADONAI elyon</i></b>";
	}
	if (_dia >= 24 && _dia <= 28){
		GenioKab.innerHTML = "<b>Lekabel</b><br/>לכבאל";
        salmo.innerHTML = "<b>Salmo (31:15) Mas yo en ti confío, oh Eterno; digo: Tú eres mi D'ios.<br/><i>Vaani alekha vatahhti ADONAI amarti elohai ata</i></b>";
	}
	if (_dia >= 29 && _dia <= 31){
		GenioKab.innerHTML = "<b>Vasariah</b><br/>ושריה";
        salmo.innerHTML = "<b>Salmo (116:4) Entonces invoqué el nombre del Eterno, diciendo: Oh Eterno, libra ahora mi alma.<br/><i>Uvshem-ADONAI ekra ana ADONAI maleta nafshí</i></b>";
	}	
}
//SEPTIEMBRE:
if (_mes == 9){
	if (_dia >= 1 && _dia <= 2){
		GenioKab.innerHTML = "<b>Vasariah</b><br/>ושריה";
        salmo.innerHTML = "<b>Salmo (116:4) Entonces invoqué el nombre del Eterno, diciendo: Oh Eterno, libra ahora mi alma.<br/><i>Uvshem-ADONAI ekra ana ADONAI maleta nafshí</i></b>";
	}
	if (_dia >= 3 && _dia <= 8){
		GenioKab.innerHTML = "<b>Yejuyah</b><br/>יחויה";
        salmo.innerHTML = "<b>Salmo (92:6) ¡Cuán grades son tus obras, oh Eterno! Muy profundos son tus pensamientos.<br/><i>Ma-gadelu maasekha ADONAI meod ameku majshevotekha</i></b>";
	}
	if (_dia >= 9 && _dia <= 13){
		GenioKab.innerHTML = "<b>Lehajyah</b><br/>להחיה";
        salmo.innerHTML = "<b>Salmo (98:4) Cantad alegres al Eterno, toda la tierra; levantad la voz, y aplaudid, y cantad salmos.<br/><i>Hariu lADONAI kol-haaretz pitzju veranenu vezameru</i></b>";
	}
	if (_dia >= 14 && _dia <= 18){
		GenioKab.innerHTML = "<b>Khavaqiah</b><br/>כוקיה";
        salmo.innerHTML = "<b>Salmo (88:14) Mas yo a ti he clamado, oh Eterno, y de mañana mi oración se presentará delante de ti.<br/><i>Vaani elekha ADONAI shivati uvaboker tefilati tekademeka</i></b>";
	}
	if (_dia >= 19 && _dia <= 23){
		GenioKab.innerHTML = "<b>Menadel</b><br/>מנדאל";
        salmo.innerHTML = "<b>Salmo (26:8) Eterno, la habitación de tu casa he amado, y el lugar de la morada de tu gloria.<br/><i>ADONAI ahavti meon betekha umkom mishkan kevodekha</i></b>";
	}
	if (_dia >= 24 && _dia <= 28){
		GenioKab.innerHTML = "<b>Aniel</b><br/>אניאל";
        salmo.innerHTML = "<b>Salmo (94:18) Cuando yo decía: Mi pie resbala, tu misericordia, oh Eterno, me sustentaba.<br/><i>Im-amarti matá ragli jasdekha ADONAI yisadeni</i></b>";
	}
	if (_dia >= 29 && _dia <= 30){
		GenioKab.innerHTML = "<b>Jaamyah</b><br/>חעמיה";
        salmo.innerHTML = "<b>Salmo (91:9) Porque has puesto al Eterno, que es mi esperanza, al Altísimo por tu habitación.<br/><i>Ki-ata ADONAI majsí elyon samta meonekha</i></b>";
	}
}
//OCTUBRE:
if (_mes == 10){
	if (_dia >= 1 && _dia <= 3){
		GenioKab.innerHTML = "<b>Jaamyah</b><br/>חעמיה";
        salmo.innerHTML = "<b>Salmo (91:9) Porque has puesto al Eterno, que es mi esperanza, al Altísimo por tu habitación.<br/><i>Ki-ata ADONAI majsí elyon samta meonekha</i></b>";
	}
	if (_dia >= 4 && _dia <= 8){
		GenioKab.innerHTML = "<b>Rehael</b><br/>רהעאל";
        salmo.innerHTML = "<b>Salmo (118:16) La diestra del Eterno es sublime; la diestra del Eterno hace valentía.<br/><i>Yemin ADONAI romema yemin ADONAI osa jayil</i></b>";
	}
	if (_dia >= 9 && _dia <= 13){
		GenioKab.innerHTML = "<b>Yeyazel</b><br/>ייזאל";
        salmo.innerHTML = "<b>Salmo (115:11) Los que teméis al Eterno, confiad en el Eterno; Él es vuestra ayuda y vuestro escudo.<br/><i>Yiré ADONAI bitju vADONAI ezram umaginam hu</i></b>";
	}
	if (_dia >= 14 && _dia <= 18){
		GenioKab.innerHTML = "<b>Hahahel</b><br/>הההאל";
        salmo.innerHTML = "<b>Salmo (120:2) Libra mi alma, oh Eterno, del labio mentiroso, y de la lengua fraudulenta.<br/><i>ADONAI hatzila nafshí misefat-sheker milashon remiya</i></b>";
	}
	if (_dia >= 19 && _dia <= 23){
		GenioKab.innerHTML = "<b>Mikael</b><br/>מיכאל";
        salmo.innerHTML = "<b>Salmo (121:7) El Eterno te guardará de todo mal; Él guardará tu alma.<br/><i>ADONAI yishmorkha mikol-ra yishmor et-nafshekha	</i></b>";
	}
	if (_dia >= 24 && _dia <= 28){
		GenioKab.innerHTML = "<b>Veuliah</b><br/>ווליה";
        salmo.innerHTML = "<b>Salmo (121:8) El Eterno guardará tu salida y tu entrada desde ahora y para siempre.<br/><i>ADONAI yishmor-tzetkha uvoekha meata vead-olam</i></b>";
	}
	if (_dia >= 29 && _dia <= 31){
		GenioKab.innerHTML = "<b>Ylahiah</b><br/>ילהיה";
        salmo.innerHTML = "<b>Salmo (106:2) ¿Quién expresará las poderosas obras del Eterno? ¿Quién contará sus alabanzas?<br/><i>Mi yemalel gevurot ADONAI yashmia kol-tehilato</i></b>";
	}
}
//NOVIEMBRE:
if (_mes == 11){
	if (_dia >= 1 && _dia <= 2){
		GenioKab.innerHTML = "<b>Ylahiah</b><br/>ילהיה";
        salmo.innerHTML = "<b>Salmo (106:2) ¿Quién expresará las poderosas obras del Eterno? ¿Quién contará sus alabanzas?<br/><i>Mi yemalel gevurot ADONAI yashmia kol-tehilato</i></b>";
	}
	if (_dia >= 3 && _dia <= 7){
		GenioKab.innerHTML = "<b>Sealiah</b><br/>סאליה";
        salmo.innerHTML = "<b>Salmo (33:22) Sea tu misericordia, oh Eterno, sobre nosotros, según esperamos en ti. <br/><i>Yehi-jasdekha ADONAI alenu kaasher yijalnu lakh</i></b>";
	}
	if (_dia >= 8 && _dia <= 12){
		GenioKab.innerHTML = "<b>Arial</b><br/>עריאל";
        salmo.innerHTML = "<b>Salmo (38:22) No me desampares, oh Eterno; D'ios mío, no te alejes de mí.	<br/><i>Al-taazveni ADONAI elohai al-tirjak mimeni</i></b>";
	}
	if (_dia >= 13 && _dia <= 17){
		GenioKab.innerHTML = "<b>Asaliah</b><br/>עשליה";
        salmo.innerHTML = "<b>Salmo (100:2) Servid al Eterno con alegría; venid ante su presencia con regocijo.<br/><i>Ivdu et-ADONAI besimhha bou lefanav birnana</i></b>";
	}
	if (_dia >= 18 && _dia <= 22){
		GenioKab.innerHTML = "<b>Mihael</b><br/>מיהאל";
        salmo.innerHTML = "<b>Salmo (109:30) Yo alabaré al Eterno en gran manera con mi boca, y en medio de muchos le alabaré.<br/><i>Odé ADONAI meod befi uvtokh rabim ahalelenu</i></b>";
	}
	if (_dia >= 23 && _dia <= 27){
		GenioKab.innerHTML = "<b>Vehuel</b><br/>והואל";
        salmo.innerHTML = "<b>Salmo (145:3) Grande es el Eterno, y digno de suprema alabanza; y su grandeza es inescrutable.<br/><i>Gadol ADONAI umhulal meod veligdulato en jeker</i></b>";
	}
	if (_dia >= 28 && _dia <= 30){
		GenioKab.innerHTML = "<b>Daniel</b><br/>דניאל";
        salmo.innerHTML = "<b>Salmo (9:2) Te alabaré, oh Eterno, con todo mi corazón; contaré todas tus maravillas.<br/><i>Odé ADONAI bekhol-libi asapera kol-nifleotekha</i></b>";
	}
}
//DICIEMBRE:
if (_mes == 12){
	if (_dia >= 1 && _dia <= 2){
		GenioKab.innerHTML = "<b>Daniel</b><br/>דניאל";
        salmo.innerHTML = "<b>Salmo (9:2) Te alabaré, oh Eterno, con todo mi corazón; contaré todas tus maravillas.<br/><i>Odé ADONAI bekhol-libi asapera kol-nifleotekha</i></b>";
	}
	if (_dia >= 3 && _dia <= 7){
		GenioKab.innerHTML = "<b>Hajasiah</b><br/>החשיה";
        salmo.innerHTML = "<b>Salmo (104:31) Sea la gloria del Eterno para siempre; alégrese el Eterno en Sus obras.<br/><i>Yehi khevod ADONAI leolam yismaj ADONAI bemaasav</i></b>";
	}
	if (_dia >= 8 && _dia <= 12){
		GenioKab.innerHTML = "<b>Imamiah</b><br/>עממיה";
        salmo.innerHTML = "<b>Salmo (25:6) Acuérdate, oh Eterno, de tus piedades y de tus misericordias, que son perpetuas.<br/><i>Zekhor-rajamekha ADONAI vajasadekha ki meolam hema</i></b>";
	}
	if (_dia >= 13 && _dia <= 17){
		GenioKab.innerHTML = "<b>Nanael</b><br/>ננאאל";
        salmo.innerHTML = "<b>Salmo (33:18) He aquí el ojo del Eterno sobre los que le temen, sobre los que esperan en su misericordia.<br/><i>Hine en ADONAI el-yereav lamyahhalim lehhasdo</i></b>";
	}
	if (_dia >= 18 && _dia <= 22){
		GenioKab.innerHTML = "<b>Nitael</b><br/>ניתאל";
        salmo.innerHTML = "<b>Salmo (16:5) El Eterno es la porción de mi herencia y de mi copa; Tú sustentas mi suerte.<br/><i>ADONAI menat-jelki vekhosi ata tomikh gorali</i></b>";
	}
	if (_dia >= 23 && _dia <= 27){
		GenioKab.innerHTML = "<b>Mebahiah</b><br/>מבהיה";
        salmo.innerHTML = "<b>Salmo (103:19) El Eterno estableció en los cielos su trono, y su reino domina sobre todos.<br/><i>ADONAI bashamayim hekhin kiso umalkhuto bakol mashala</i></b>";
	}
	if (_dia >= 28 && _dia <= 31){
		GenioKab.innerHTML = "<b>Poyel</b><br/>פויאל";
        salmo.innerHTML = "<b>Salmo (149:4) Porque el Eterno tiene contentamientos en su pueblo; hermoseará a los humildes con la salvación.<br/><i>Ki-rotze ADONAI beamo yefaer anavim bishua</i></b>";
	}
}//final_diciembre.

}//final_funcion_GenioFisico.

// Mostrar el MODAL sólo si se ha establecido una fecha, y ejecutar la funcion:
function activar()
{
    if (fecha.value == ""){
        $('#staticBackdrop').modal('hide')
        alert("Establece una fecha.");
    }
    else{
        $('#staticBackdrop').modal('show');
        GenioFisico();
    }
}
    
    
    
    
    
    
    