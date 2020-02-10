
  $(function(){
	  var para = "National Institute of Technology, Rourkela is one of the premier educational institutions of the country. Apart from excelling in academics, it seeks to ensure the holistic development of the students through excellence in extracurricular activities. It entails the above-mentioned possibilities through the organization of various fests throughout the year. Every year NITR used to host 3 fests namely: Sports, Technical and Cultural. Since 2018 a new fest has been included in the list. It has been named “Cosmopolitan”. Cosmopolitan is the refined version of Multi-ethnic Fest which saw its last presence back in 2016. It is in accord with the genre of the performances that found their way back in 2016. Cosmopolitan 2018 witnessed an overwhelmingly exciting voyage of scintillating performances, marked by the traditions from different parts of the country and beyond. Cosmopolitan 2020 will also see the unification of various cultures conglomerating under a single roof. It will celebrate the ethnicity and tradition, unique to a specific part of the country. Each student will get a chance to see beyond the frontiers of their local and regional traditions. Not only will they appreciate it but also proudly hold the unity that their nation offers. It will offer a platform to know and recognize the very roots of the nation's cultural diversity. The Film and Music Society of Student Activity Centre, NIT Rourkela has decided to organize “The Cosmopolitan festival 2020” from 10th January (Friday) to 12th January (Sunday). NITR houses students from various parts of the Indian mainland and beyond. This festival is a noble venture that aims at celebrating this rich cultural diversity. The event will consist of dance, drama, music and various workshops, the genre of which would be confined to traditional, classical and folk. It can include performances like Odissi, Kathak, Kuchipudi, Bharatanatyam, Bhandah, Bihu, Bodo, Kalbelia, Puppet show, Ram Leela, Chhau Dance, Kalaripayattu, Dandia, Danda, Jhumar, State Anthem Any folksong, Drama or any Folk, Classical Music vocal / Instrumental like Flute Violin, Tabla, Sitar, Mrudangam, Sarangi, Bina, Karnataki vocal, Hindustani vocal, Odissi vocal. The stage is set to celebrate the vibrancy of Cultural unity.";
	  
	  var text_truncate = para.substring(0, 600) + "...";
	  if ($(window).width() <= 768) {  
 
		$("#aboutpara").text(text_truncate);
		$("#about_btn").text("Read More..");
	}
	else{
		$("#aboutpara").text(para);
		$("#about_btn").hide();
		}    
	 $("#about_btn").click(function(){
		 if($("#aboutpara").text()==text_truncate){
			$("#aboutpara").text(para);
		 	$("#about_btn").text("Show Less..");
		 }
		 else{
			$("#aboutpara").text(text_truncate);
			$("#about_btn").text("Read More..");
		 }
		 
	 })
	  


  });
  $(window).scroll(function() {
	if ($(this).scrollTop() >= 50) {        
		$('#cosmo-to-top').fadeIn(200);    
	} else {
		$('#cosmo-to-top').fadeOut(200);   
	}
});
$('#cosmo-to-top').click(function() {      
	$('body,html').animate({
		scrollTop : 0                       
	}, 500);
});
  
  