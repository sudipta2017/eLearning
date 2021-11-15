function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Inan6JCh4c":
        Script1();
        break;
      case "5UxveizglIE":
        Script2();
        break;
      case "6QxT5npciA5":
        Script3();
        break;
      case "5vvJlPEJqxn":
        Script4();
        break;
      case "6GGg2OnRnj2":
        Script5();
        break;
  }
}

function Script1()
{
  var styles="th,td {width: 25%;}";
var bs= '<link rel="stylesheet" type="text/css" media="all" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">';

var player=GetPlayer();

//Define Your Brand
var brand_q1=player.GetVar("brand_q1");
var brand_q2=player.GetVar("brand_q2");
var brand_q3=player.GetVar("brand_q3");
var brand_q4=player.GetVar("brand_q4");
//Identify Your Customers
var PER11=player.GetVar("PER_1_1");
var PER12=player.GetVar("PER_1_2");
var PER13=player.GetVar("PER_1_3");
var PER14=player.GetVar("PER_1_4");
var PER15=player.GetVar("PER_1_5");
var PER21=player.GetVar("PER_2_1");
var PER22=player.GetVar("PER_2_2");
var PER23=player.GetVar("PER_2_3");
var PER24=player.GetVar("PER_2_4");
var PER25=player.GetVar("PER_2_5");
var PER31=player.GetVar("PER_3_1");
var PER32=player.GetVar("PER_3_2");
var PER33=player.GetVar("PER_3_3");
var PER34=player.GetVar("PER_3_4");
var PER35=player.GetVar("PER_3_5");
//Understand Your Competitors
var COM1q1=player.GetVar("COM_1_1");
var COM1q2=player.GetVar("COM_1_2");
var COM1q3=player.GetVar("COM_1_3");
var COM1q4=player.GetVar("COM_1_4");
var COM1q5=player.GetVar("COM_1_5");
var COM2q1=player.GetVar("COM_2_1");
var COM2q2=player.GetVar("COM_2_2");
var COM2q3=player.GetVar("COM_2_3");
var COM2q4=player.GetVar("COM_2_4");
var COM2q5=player.GetVar("COM_2_5");
var COM3q1=player.GetVar("COM_3_1");
var COM3q2=player.GetVar("COM_3_2");
var COM3q3=player.GetVar("COM_3_3");
var COM3q4=player.GetVar("COM_3_4");
var COM3q5=player.GetVar("COM_3_5");
//Analyze Your Business
var A=player.GetVar("Strength");
var B=player.GetVar("Weakness");
var C=player.GetVar("Oppor");
var D=player.GetVar("Threat");
//Define Your Difference
var USP=player.GetVar("USP");
var EP=player.GetVar("EP");
//Map Your Customer's Journey
var map_q1_p1=player.GetVar("map_q1_p1");
var map_q1_p2=player.GetVar("map_q1_p2");
var map_q1_p3=player.GetVar("map_q1_p3");
var map_q2_p1=player.GetVar("map_q2_p1");
var map_q2_p2=player.GetVar("map_q2_p2");
var map_q2_p3=player.GetVar("map_q2_p3");
var map_q3_p1=player.GetVar("map_q3_p1");
var map_q3_p2=player.GetVar("map_q3_p2");
var map_q3_p3=player.GetVar("map_q3_p3");
var map_q4_p1=player.GetVar("map_q4_p1");
var map_q4_p2=player.GetVar("map_q4_p2");
var map_q4_p3=player.GetVar("map_q4_p3");
var map_q5_p1=player.GetVar("map_q5_p1");
var map_q5_p2=player.GetVar("map_q5_p2");
var map_q5_p3=player.GetVar("map_q5_p3");
//Create Your Action Plan
var ACT11=player.GetVar("act_1_q1");
var ACT12=player.GetVar("act_1_q2");
var ACT13=player.GetVar("act_1_q3");
var ACT14=player.GetVar("act_1_q4");
var ACT15=player.GetVar("act_1_q5");
var ACT21=player.GetVar("act_2_q1");
var ACT22=player.GetVar("act_2_q2");
var ACT23=player.GetVar("act_2_q3");
var ACT24=player.GetVar("act_2_q4");
var ACT25=player.GetVar("act_2_q5");
var ACT31=player.GetVar("act_3_q1");
var ACT32=player.GetVar("act_3_q2");
var ACT33=player.GetVar("act_3_q3");
//Monitoring, Measuring, Improving
var monitor_q1=player.GetVar("monitor_q1");
var monitor_q2=player.GetVar("monitor_q2");



var content='<div class="container">'

//Define Your Brand
+ '<div class="row">'
+ '<div class="col text-dark px-3 py-1 mb-1">'
+ '<h1 class="text-uppercase">Marketing <b>Plan</b></h1>'
+ '</div>'
+ '</div>'
+ '<br>'
+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h2>Part 1</h2>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Define Your Brand</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'

+ '<h5 class="text-secondary py-2"><b>What is your vision statement?</b></h4>'
+ '<p class="text-body">'+brand_q1+'</p>'
+ '<h5 class="text-secondary py-2"><b>What value does your organization provide to customers that no one else can?</b></h4>'
+ '<p class="text-body">'+brand_q2+'</p>'
+ '<h5 class="text-secondary py-2"><b>What is your positioning statement?</b></h4>'
+ '<p class="text-body">'+brand_q3+'</p>'
+ '<h5 class="text-secondary py-2"><b>How do you want to be perceived in the marketplace?</b></h4>'
+ '<p class="text-body">'+brand_q4+'</p>'

//Identify Your Customers

+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h2>Part 2</h2>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Identify Your Customers</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'

+ '<h4 class="text-danger py-2">Persona 1</h4>'
+ '<h5 class="text-secondary py-2"><b>What is their demographic profile?</b> (Age, sex, profession, income, social status, education, etc.)</h4>'
+ '<p class="text-body">'+PER11+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their values, attitudes, interests, needs and lifestyle choices?</b> What is important to them?</h4>'
+ '<p class="text-body">'+PER12+'</p>'
+ '<h5 class="text-secondary py-2"><b>How do they like to do business?</b> Online or face-to-face? How much do they spend? What kind of products do they buy? What do they want in terms of features, functionality and cost?</h4>'
+ '<p class="text-body">'+PER13+'</p>'
+ '<h5 class="text-secondary py-2"><b>Where are they located?</b></h4>'
+ '<p class="text-body">'+PER14+'</p>'
+ '<h5 class="text-secondary py-2"><b>Why would this person buy your product or service?</b></h4>'
+ '<p class="text-body">'+PER15+'</p>'

+ '<h4 class="text-danger py-2">Persona 2</h4>'
+ '<h5 class="text-secondary py-2"><b>What is their demographic profile?</b> (Age, sex, profession, income, social status, education, etc.)</h4>'
+ '<p class="text-body">'+PER21+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their values, attitudes, interests, needs and lifestyle choices?</b> What is important to them?</h4>'
+ '<p class="text-body">'+PER22+'</p>'
+ '<h5 class="text-secondary py-2"><b>How do they like to do business?</b> Online or face-to-face? How much do they spend? What kind of products do they buy? What do they want in terms of features, functionality and cost?</h4>'
+ '<p class="text-body">'+PER23+'</p>'
+ '<h5 class="text-secondary py-2"><b>Where are they located?</b></h4>'
+ '<p class="text-body">'+PER24+'</p>'
+ '<h5 class="text-secondary py-2"><b>Why would this person buy your product or service?</b></h4>'
+ '<p class="text-body">'+PER25+'</p>'

+ '<h4 class="text-danger py-2">Persona 3</h4>'
+ '<h5 class="text-secondary py-2"><b>What is their demographic profile?</b> (Age, sex, profession, income, social status, education, etc.)</h4>'
+ '<p class="text-body">'+PER31+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their values, attitudes, interests, needs and lifestyle choices?</b> What is important to them?</h4>'
+ '<p class="text-body">'+PER32+'</p>'
+ '<h5 class="text-secondary py-2"><b>How do they like to do business?</b> Online or face-to-face? How much do they spend? What kind of products do they buy? What do they want in terms of features, functionality and cost?</h4>'
+ '<p class="text-body">'+PER33+'</p>'
+ '<h5 class="text-secondary py-2"><b>Where are they located?</b></h4>'
+ '<p class="text-body">'+PER34+'</p>'
+ '<h5 class="text-secondary py-2"><b>Why would this person buy your product or service?</b></h4>'
+ '<p class="text-body">'+PER35+'</p>'

//Understand Your Competitors

+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h3>Part 3</h3>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Understand Your Competitors</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'

+ '<h4 class="text-danger py-2">Competitor 1</h4>'
+ '<h5 class="text-secondary py-2"><b>Where are they located?</b></h4>'
+ '<p class="text-body">'+COM1q1+'</p>'
+ '<h5 class="text-secondary py-2"><b>How long have they been in business?</b></h4>'
+ '<p class="text-body">'+COM1q2+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their target markets?</b></h4>'
+ '<p class="text-body">'+COM1q3+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their unique selling points, competitive differentiators?</b></h4>'
+ '<p class="text-body">'+COM1q4+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their strengths, weaknesses?</b></h4>'
+ '<p class="text-body">'+COM1q5+'</p>'

+ '<h4 class="text-danger py-2">Competitor 2</h4>'
+ '<h5 class="text-secondary py-2"><b>Where are they located?</b></h4>'
+ '<p class="text-body">'+COM2q1+'</p>'
+ '<h5 class="text-secondary py-2"><b>How long have they been in business?</b></h4>'
+ '<p class="text-body">'+COM2q2+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their target markets?</b></h4>'
+ '<p class="text-body">'+COM2q3+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their unique selling points, competitive differentiators?</b></h4>'
+ '<p class="text-body">'+COM2q4+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their strengths, weaknesses?</b></h4>'
+ '<p class="text-body">'+COM2q5+'</p>'

+ '<h4 class="text-danger py-2">Competitor 3</h4>'
+ '<h5 class="text-secondary py-2"><b>Where are they located?</b></h4>'
+ '<p class="text-body">'+COM3q1+'</p>'
+ '<h5 class="text-secondary py-2"><b>How long have they been in business?</b></h4>'
+ '<p class="text-body">'+COM3q2+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their target markets?</b></h4>'
+ '<p class="text-body">'+COM3q3+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their unique selling points, competitive differentiators?</b></h4>'
+ '<p class="text-body">'+COM3q4+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their strengths, weaknesses?</b></h4>'
+ '<p class="text-body">'+COM3q5+'</p>'

//Analyze Your Business

+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h3>Part 4</h3>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Analyze Your Business</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'

+ '<h4 class="text-danger py-2">Strengths</h4>'
+ '<h5 class="text-secondary py-2">What characteristics does your business possess that give it an advantage over others? </h4>'
+ '<p class="text-body">'+A+'</p>'
+ '<h4 class="text-danger py-2">Weaknesses</h4>'
+ '<h5 class="text-secondary py-2">What places your business at a disadvantage versus others? Address these weaknesses immediately.</h4>'
+ '<p class="text-body">'+B+'</p>'
+ '<h4 class="text-danger py-2">Opportunities</h4>'
+ '<h5 class="text-secondary py-2">What conditions or situations in the marketplace or in your competitors’ offerings could you exploit to your advantage?</h4>'
+ '<p class="text-body">'+C+'</p>'
+ '<h4 class="text-danger py-2">Threats</h4>'
+ '<h5 class="text-secondary py-2">What conditions or situations in the marketplace, or activities by your competition, could work against you?</h4>'
+ '<p class="text-body">'+D+'</p>'

//Define Your Difference

+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h3>Part 5</h3>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Define Your Difference</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'
+ '<h5 class="text-secondary py-2">What is your Unique Selling Point (USP)?</h5>'
+ '<p class="text-body">'+USP+'</p>'
+ '<h5 class="text-secondary py-2">What is your elevator pitch?</h5>'
+ '<p class="text-body">'+EP+'</p>'

//Map Your Customer's Journey

+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h3>Part 6</h3>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Map Your Customer\'s Journey</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'

+ '<h4 class="text-danger py-2">Persona 1</h4>'
+ '<h5 class="text-secondary py-2"><b>Attention</b> – How will you make your ideal customer aware of your business?</h4>'
+ '<p class="text-body">'+map_q1_p1+'</p>'
+ '<h5 class="text-secondary py-2"><b>Interest</b> – How will you get them interested in your business?</h4>'
+ '<p class="text-body">'+map_q2_p1+'</p>'
+ '<h5 class="text-secondary py-2"><b>Desire</b> – How will you create a desire to purchase?</h4>'
+ '<p class="text-body">'+map_q3_p1+'</p>'
+ '<h5 class="text-secondary py-2"><b>Action</b> – How will you get them to take action and make a purchase?</h4>'
+ '<p class="text-body">'+map_q4_p1+'</p>'
+ '<h5 class="text-secondary py-2"><b>Loyalty</b> – How will you make them loyal to your business?</h4>'
+ '<p class="text-body">'+map_q5_p1+'</p>'

+ '<h4 class="text-danger py-2">Persona 2</h4>'
+ '<h5 class="text-secondary py-2"><b>Attention</b> – How will you make your ideal customer aware of your business?</h4>'
+ '<p class="text-body">'+map_q1_p2+'</p>'
+ '<h5 class="text-secondary py-2"><b>Interest</b> – How will you get them interested in your business?</h4>'
+ '<p class="text-body">'+map_q2_p2+'</p>'
+ '<h5 class="text-secondary py-2"><b>Desire</b> – How will you create a desire to purchase?</h4>'
+ '<p class="text-body">'+map_q3_p2+'</p>'
+ '<h5 class="text-secondary py-2"><b>Action</b> – How will you get them to take action and make a purchase?</h4>'
+ '<p class="text-body">'+map_q4_p2+'</p>'
+ '<h5 class="text-secondary py-2"><b>Loyalty</b> – How will you make them loyal to your business?</h4>'
+ '<p class="text-body">'+map_q5_p2+'</p>'

+ '<h4 class="text-danger py-2">Persona 1</h4>'
+ '<h5 class="text-secondary py-2"><b>Attention</b> – How will you make your ideal customer aware of your business?</h4>'
+ '<p class="text-body">'+map_q1_p3+'</p>'
+ '<h5 class="text-secondary py-2"><b>Interest</b> – How will you get them interested in your business?</h4>'
+ '<p class="text-body">'+map_q2_p3+'</p>'
+ '<h5 class="text-secondary py-2"><b>Desire</b> – How will you create a desire to purchase?</h4>'
+ '<p class="text-body">'+map_q3_p3+'</p>'
+ '<h5 class="text-secondary py-2"><b>Action</b> – How will you get them to take action and make a purchase?</h4>'
+ '<p class="text-body">'+map_q4_p3+'</p>'
+ '<h5 class="text-secondary py-2"><b>Loyalty</b> – How will you make them loyal to your business?</h4>'
+ '<p class="text-body">'+map_q5_p3+'</p>'

//Create Your Action Plan

+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h3>Part 7</h3>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Your Action Plan</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'

+ '<h4 class="text-danger py-2">Resources</h4>'
+ '<h5 class="text-secondary py-2">What is your marketing budget? How much can you afford to spend this year?</h5>'
+ '<p class="text-body">'+ACT11+'</p>'
+ '<h5 class="text-secondary py-2">Who is on your marketing team?</h5>'
+ '<p class="text-body">'+ACT12+'</p>'
+ '<h5 class="text-secondary py-2">Who is responsible for what?</h5>'
+ '<p class="text-body">'+ACT13+'</p>'
+ '<h5 class="text-secondary py-2">What is your pricing strategy?</h5>'
+ '<p class="text-body">'+ACT14+'</p>'
+ '<h5 class="text-secondary py-2">How will you distribute your goods or services?</h5>'
+ '<p class="text-body">'+ACT15+'</p>'

+ '<h4 class="text-danger py-2">Website</h4>'
+ '<h5 class="text-secondary py-2"><b>Design:</b> How will you get a modern, attractive, effective website? </h5>'
+ '<p class="text-body">'+ACT21+'</p>'
+ '<h5 class="text-secondary py-2"><b>Content:</b> What kind of content will you produce? Who will be responsible for regularly producing and managing it?</h5>'
+ '<p class="text-body">'+ACT22+'</p>'
+ '<h5 class="text-secondary py-2"><b>Search Engine Optimization:</b> How will you optimize your site so your content ranks high on search engine results?</h5>'
+ '<p class="text-body">'+ACT23+'</p>'
+ '<h5 class="text-secondary py-2">What is your social media strategy? What platforms make sense for your business? Who will plan and manage your communities and respond to questions?</h5>'
+ '<p class="text-body">'+ACT24+'</p>'
+ '<h5 class="text-secondary py-2">What will be your email marketing strategy (keeping in mind Canada’s anti-spam law)?</h5>'
+ '<p class="text-body">'+ACT25+'</p>'

+ '<h4 class="text-danger py-2">Advertising</h4>'
+ '<h5 class="text-secondary py-2">What is your advertising strategy? (pay per click, print, TV, radio etc.)</h5>'
+ '<p class="text-body">'+ACT31+'</p>'
+ '<h5 class="text-secondary py-2">What is your public relations strategy? Public relations includes efforts to woo editors or journalists to cover your business, and also having an action plan to protect your brand in a crisis scenario. </h5>'
+ '<p class="text-body">'+ACT32+'</p>'
+ '<h5 class="text-secondary py-2">What is your after-the-sale strategy? How will you ensure customers remain loyal and happy for the long-term?</h5>'
+ '<p class="text-body">'+ACT33+'</p>'

//Monitoring, Measuring, Improving

+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h3>Part 8</h3>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Monitoring, Measuring and Improving</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'
+ '<h5 class="text-secondary py-2"><b>How will you measure the effectiveness of your marketing activities?</b></h4>'
+ '<p class="text-body">'+monitor_q1+'</p>'
+ '<h5 class="text-secondary py-2"><b>How will you adjust to improve?</b></h4>'
+ '<p class="text-body">'+monitor_q2+'</p>'



+ '</div>';

var html= "<html><head>"+bs+"<style>"+styles+"</style></head><body>"
+ content
+ "</body></html>";

var myWindow = window.open("","Print","width=1024,height=800,scrollbars=1,resizable=1");
myWindow.document.write(html);

myWindow.print();
}

function Script2()
{
  var styles="th,td {width: 25%;}";
var bs= '<link rel="stylesheet" type="text/css" media="all" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">';

var player=GetPlayer();

//Define Your Brand
var brand_q1=player.GetVar("brand_q1");
var brand_q2=player.GetVar("brand_q2");
var brand_q3=player.GetVar("brand_q3");
var brand_q4=player.GetVar("brand_q4");
//Identify Your Customers
var PER11=player.GetVar("PER_1_1");
var PER12=player.GetVar("PER_1_2");
var PER13=player.GetVar("PER_1_3");
var PER14=player.GetVar("PER_1_4");
var PER15=player.GetVar("PER_1_5");
var PER21=player.GetVar("PER_2_1");
var PER22=player.GetVar("PER_2_2");
var PER23=player.GetVar("PER_2_3");
var PER24=player.GetVar("PER_2_4");
var PER25=player.GetVar("PER_2_5");
var PER31=player.GetVar("PER_3_1");
var PER32=player.GetVar("PER_3_2");
var PER33=player.GetVar("PER_3_3");
var PER34=player.GetVar("PER_3_4");
var PER35=player.GetVar("PER_3_5");
//Understand Your Competitors
var COM1q1=player.GetVar("COM_1_1");
var COM1q2=player.GetVar("COM_1_2");
var COM1q3=player.GetVar("COM_1_3");
var COM1q4=player.GetVar("COM_1_4");
var COM1q5=player.GetVar("COM_1_5");
var COM2q1=player.GetVar("COM_2_1");
var COM2q2=player.GetVar("COM_2_2");
var COM2q3=player.GetVar("COM_2_3");
var COM2q4=player.GetVar("COM_2_4");
var COM2q5=player.GetVar("COM_2_5");
var COM3q1=player.GetVar("COM_3_1");
var COM3q2=player.GetVar("COM_3_2");
var COM3q3=player.GetVar("COM_3_3");
var COM3q4=player.GetVar("COM_3_4");
var COM3q5=player.GetVar("COM_3_5");
var Name_Com1=player.GetVar("Name_Com1");
var Name_Com2=player.GetVar("Name_Com2");
var Name_Com3=player.GetVar("Name_Com3");

//Analyze Your Business
var A=player.GetVar("Strength");
var B=player.GetVar("Weakness");
var C=player.GetVar("Oppor");
var D=player.GetVar("Threat");
//Define Your Difference
var USP=player.GetVar("USP");
var EP=player.GetVar("EP");
//Map Your Customer's Journey
var map_q1_p1=player.GetVar("map_q1_p1");
var map_q1_p2=player.GetVar("map_q1_p2");
var map_q1_p3=player.GetVar("map_q1_p3");
var map_q2_p1=player.GetVar("map_q2_p1");
var map_q2_p2=player.GetVar("map_q2_p2");
var map_q2_p3=player.GetVar("map_q2_p3");
var map_q3_p1=player.GetVar("map_q3_p1");
var map_q3_p2=player.GetVar("map_q3_p2");
var map_q3_p3=player.GetVar("map_q3_p3");
var map_q4_p1=player.GetVar("map_q4_p1");
var map_q4_p2=player.GetVar("map_q4_p2");
var map_q4_p3=player.GetVar("map_q4_p3");
var map_q5_p1=player.GetVar("map_q5_p1");
var map_q5_p2=player.GetVar("map_q5_p2");
var map_q5_p3=player.GetVar("map_q5_p3");
//Create Your Action Plan
var ACT11=player.GetVar("act_1_q1");
var ACT12=player.GetVar("act_1_q2");
var ACT13=player.GetVar("act_1_q3");
var ACT14=player.GetVar("act_1_q4");
var ACT15=player.GetVar("act_1_q5");
var ACT21=player.GetVar("act_2_q1");
var ACT22=player.GetVar("act_2_q2");
var ACT23=player.GetVar("act_2_q3");
var ACT24=player.GetVar("act_2_q4");
var ACT25=player.GetVar("act_2_q5");
var ACT31=player.GetVar("act_3_q1");
var ACT32=player.GetVar("act_3_q2");
var ACT33=player.GetVar("act_3_q3");
//Monitoring, Measuring, Improving
var monitor_q1=player.GetVar("monitor_q1");
var monitor_q2=player.GetVar("monitor_q2");



var content='<div class="container">'

//Define Your Brand
+ '<div class="row">'
+ '<div class="col text-dark px-3 py-1 mb-1">'
+ '<h1 class="text-uppercase">Marketing <b>Plan</b></h1>'
+ '</div>'
+ '</div>'
+ '<br>'
+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h2>Part 1</h2>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Define Your Brand</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'

+ '<h5 class="text-secondary py-2"><b>What is your vision statement?</b></h4>'
+ '<p class="text-body">'+brand_q1+'</p>'
+ '<h5 class="text-secondary py-2"><b>What value does your organization provide to customers that no one else can?</b></h4>'
+ '<p class="text-body">'+brand_q2+'</p>'
+ '<h5 class="text-secondary py-2"><b>What is your positioning statement?</b></h4>'
+ '<p class="text-body">'+brand_q3+'</p>'
+ '<h5 class="text-secondary py-2"><b>How do you want to be perceived in the marketplace?</b></h4>'
+ '<p class="text-body">'+brand_q4+'</p>'

//Identify Your Customers

+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h2>Part 2</h2>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Identify Your Customers</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'

+ '<h4 class="text-danger py-2">Persona 1</h4>'
+ '<h5 class="text-secondary py-2"><b>What is their demographic profile?</b> (Age, sex, profession, income, social status, education, etc.)</h4>'
+ '<p class="text-body">'+PER11+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their values, attitudes, interests, needs and lifestyle choices?</b> What is important to them?</h4>'
+ '<p class="text-body">'+PER12+'</p>'
+ '<h5 class="text-secondary py-2"><b>How do they like to do business?</b> Online or face-to-face? How much do they spend? What kind of products do they buy? What do they want in terms of features, functionality and cost?</h4>'
+ '<p class="text-body">'+PER13+'</p>'
+ '<h5 class="text-secondary py-2"><b>Where are they located?</b></h4>'
+ '<p class="text-body">'+PER14+'</p>'
+ '<h5 class="text-secondary py-2"><b>Why would this person buy your product or service?</b></h4>'
+ '<p class="text-body">'+PER15+'</p>'

+ '<h4 class="text-danger py-2">Persona 2</h4>'
+ '<h5 class="text-secondary py-2"><b>What is their demographic profile?</b> (Age, sex, profession, income, social status, education, etc.)</h4>'
+ '<p class="text-body">'+PER21+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their values, attitudes, interests, needs and lifestyle choices?</b> What is important to them?</h4>'
+ '<p class="text-body">'+PER22+'</p>'
+ '<h5 class="text-secondary py-2"><b>How do they like to do business?</b> Online or face-to-face? How much do they spend? What kind of products do they buy? What do they want in terms of features, functionality and cost?</h4>'
+ '<p class="text-body">'+PER23+'</p>'
+ '<h5 class="text-secondary py-2"><b>Where are they located?</b></h4>'
+ '<p class="text-body">'+PER24+'</p>'
+ '<h5 class="text-secondary py-2"><b>Why would this person buy your product or service?</b></h4>'
+ '<p class="text-body">'+PER25+'</p>'

+ '<h4 class="text-danger py-2">Persona 3</h4>'
+ '<h5 class="text-secondary py-2"><b>What is their demographic profile?</b> (Age, sex, profession, income, social status, education, etc.)</h4>'
+ '<p class="text-body">'+PER31+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their values, attitudes, interests, needs and lifestyle choices?</b> What is important to them?</h4>'
+ '<p class="text-body">'+PER32+'</p>'
+ '<h5 class="text-secondary py-2"><b>How do they like to do business?</b> Online or face-to-face? How much do they spend? What kind of products do they buy? What do they want in terms of features, functionality and cost?</h4>'
+ '<p class="text-body">'+PER33+'</p>'
+ '<h5 class="text-secondary py-2"><b>Where are they located?</b></h4>'
+ '<p class="text-body">'+PER34+'</p>'
+ '<h5 class="text-secondary py-2"><b>Why would this person buy your product or service?</b></h4>'
+ '<p class="text-body">'+PER35+'</p>'

//Understand Your Competitors

+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h3>Part 3</h3>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Understand Your Competitors</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'

+ '<h4 class="text-danger py-2">'+Name_Com1+'</h4>'
+ '<h5 class="text-secondary py-2"><b>Where are they located?</b></h4>'
+ '<p class="text-body">'+COM1q1+'</p>'
+ '<h5 class="text-secondary py-2"><b>How long have they been in business?</b></h4>'
+ '<p class="text-body">'+COM1q2+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their target markets?</b></h4>'
+ '<p class="text-body">'+COM1q3+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their unique selling points, competitive differentiators?</b></h4>'
+ '<p class="text-body">'+COM1q4+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their strengths, weaknesses?</b></h4>'
+ '<p class="text-body">'+COM1q5+'</p>'

+ '<h4 class="text-danger py-2">'+Name_Com2+'</h4>'
+ '<h5 class="text-secondary py-2"><b>Where are they located?</b></h4>'
+ '<p class="text-body">'+COM2q1+'</p>'
+ '<h5 class="text-secondary py-2"><b>How long have they been in business?</b></h4>'
+ '<p class="text-body">'+COM2q2+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their target markets?</b></h4>'
+ '<p class="text-body">'+COM2q3+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their unique selling points, competitive differentiators?</b></h4>'
+ '<p class="text-body">'+COM2q4+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their strengths, weaknesses?</b></h4>'
+ '<p class="text-body">'+COM2q5+'</p>'

+ '<h4 class="text-danger py-2">'+Name_Com3+'</h4>'
+ '<h5 class="text-secondary py-2"><b>Where are they located?</b></h4>'
+ '<p class="text-body">'+COM3q1+'</p>'
+ '<h5 class="text-secondary py-2"><b>How long have they been in business?</b></h4>'
+ '<p class="text-body">'+COM3q2+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their target markets?</b></h4>'
+ '<p class="text-body">'+COM3q3+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their unique selling points, competitive differentiators?</b></h4>'
+ '<p class="text-body">'+COM3q4+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their strengths, weaknesses?</b></h4>'
+ '<p class="text-body">'+COM3q5+'</p>'

//Analyze Your Business

+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h3>Part 4</h3>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Analyze Your Business</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'

+ '<h4 class="text-danger py-2">Strengths</h4>'
+ '<h5 class="text-secondary py-2">What characteristics does your business possess that give it an advantage over others? </h4>'
+ '<p class="text-body">'+A+'</p>'
+ '<h4 class="text-danger py-2">Weaknesses</h4>'
+ '<h5 class="text-secondary py-2">What places your business at a disadvantage versus others? Address these weaknesses immediately.</h4>'
+ '<p class="text-body">'+B+'</p>'
+ '<h4 class="text-danger py-2">Opportunities</h4>'
+ '<h5 class="text-secondary py-2">What conditions or situations in the marketplace or in your competitors’ offerings could you exploit to your advantage?</h4>'
+ '<p class="text-body">'+C+'</p>'
+ '<h4 class="text-danger py-2">Threats</h4>'
+ '<h5 class="text-secondary py-2">What conditions or situations in the marketplace, or activities by your competition, could work against you?</h4>'
+ '<p class="text-body">'+D+'</p>'

//Define Your Difference

+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h3>Part 5</h3>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Define Your Difference</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'
+ '<h5 class="text-secondary py-2">What is your value proposition?</h5>'
+ '<p class="text-body">'+USP+'</p>'
+ '<h5 class="text-secondary py-2">What is your elevator pitch?</h5>'
+ '<p class="text-body">'+EP+'</p>'

//Map Your Customer's Journey

+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h3>Part 6</h3>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Map Your Customer\'s Journey</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'

+ '<h4 class="text-danger py-2">Persona 1</h4>'
+ '<h5 class="text-secondary py-2"><b>Attention</b> – How will you make your ideal customer aware of your business?</h4>'
+ '<p class="text-body">'+map_q1_p1+'</p>'
+ '<h5 class="text-secondary py-2"><b>Interest</b> – How will you get them interested in your business?</h4>'
+ '<p class="text-body">'+map_q2_p1+'</p>'
+ '<h5 class="text-secondary py-2"><b>Desire</b> – How will you create a desire to purchase?</h4>'
+ '<p class="text-body">'+map_q3_p1+'</p>'
+ '<h5 class="text-secondary py-2"><b>Action</b> – How will you get them to take action and make a purchase?</h4>'
+ '<p class="text-body">'+map_q4_p1+'</p>'
+ '<h5 class="text-secondary py-2"><b>Loyalty</b> – How will you make them loyal to your business?</h4>'
+ '<p class="text-body">'+map_q5_p1+'</p>'

+ '<h4 class="text-danger py-2">Persona 2</h4>'
+ '<h5 class="text-secondary py-2"><b>Attention</b> – How will you make your ideal customer aware of your business?</h4>'
+ '<p class="text-body">'+map_q1_p2+'</p>'
+ '<h5 class="text-secondary py-2"><b>Interest</b> – How will you get them interested in your business?</h4>'
+ '<p class="text-body">'+map_q2_p2+'</p>'
+ '<h5 class="text-secondary py-2"><b>Desire</b> – How will you create a desire to purchase?</h4>'
+ '<p class="text-body">'+map_q3_p2+'</p>'
+ '<h5 class="text-secondary py-2"><b>Action</b> – How will you get them to take action and make a purchase?</h4>'
+ '<p class="text-body">'+map_q4_p2+'</p>'
+ '<h5 class="text-secondary py-2"><b>Loyalty</b> – How will you make them loyal to your business?</h4>'
+ '<p class="text-body">'+map_q5_p2+'</p>'

+ '<h4 class="text-danger py-2">Persona 3</h4>'
+ '<h5 class="text-secondary py-2"><b>Attention</b> – How will you make your ideal customer aware of your business?</h4>'
+ '<p class="text-body">'+map_q1_p3+'</p>'
+ '<h5 class="text-secondary py-2"><b>Interest</b> – How will you get them interested in your business?</h4>'
+ '<p class="text-body">'+map_q2_p3+'</p>'
+ '<h5 class="text-secondary py-2"><b>Desire</b> – How will you create a desire to purchase?</h4>'
+ '<p class="text-body">'+map_q3_p3+'</p>'
+ '<h5 class="text-secondary py-2"><b>Action</b> – How will you get them to take action and make a purchase?</h4>'
+ '<p class="text-body">'+map_q4_p3+'</p>'
+ '<h5 class="text-secondary py-2"><b>Loyalty</b> – How will you make them loyal to your business?</h4>'
+ '<p class="text-body">'+map_q5_p3+'</p>'

//Create Your Action Plan

+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h3>Part 7</h3>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Create Your Action Plan</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'

+ '<h4 class="text-danger py-2">Resources</h4>'
+ '<h5 class="text-secondary py-2">What is your marketing budget? How much can you afford to spend this year?</h5>'
+ '<p class="text-body">'+ACT11+'</p>'
+ '<h5 class="text-secondary py-2">Who is on your marketing team?</h5>'
+ '<p class="text-body">'+ACT12+'</p>'
+ '<h5 class="text-secondary py-2">Who is responsible for what?</h5>'
+ '<p class="text-body">'+ACT13+'</p>'
+ '<h5 class="text-secondary py-2">What is your pricing strategy?</h5>'
+ '<p class="text-body">'+ACT14+'</p>'
+ '<h5 class="text-secondary py-2">How will you distribute your goods or services?</h5>'
+ '<p class="text-body">'+ACT15+'</p>'

+ '<h4 class="text-danger py-2">Website</h4>'
+ '<h5 class="text-secondary py-2"><b>Design:</b> How will you get a modern, attractive, effective website? </h5>'
+ '<p class="text-body">'+ACT21+'</p>'
+ '<h5 class="text-secondary py-2"><b>Content:</b> What kind of content will you produce? Who will be responsible for regularly producing and managing it?</h5>'
+ '<p class="text-body">'+ACT22+'</p>'
+ '<h5 class="text-secondary py-2"><b>Search Engine Optimization:</b> How will you optimize your site so your content ranks high on search engine results?</h5>'
+ '<p class="text-body">'+ACT23+'</p>'
+ '<h5 class="text-secondary py-2">What is your social media strategy? What platforms make sense for your business? Who will plan and manage your communities and respond to questions?</h5>'
+ '<p class="text-body">'+ACT24+'</p>'
+ '<h5 class="text-secondary py-2">What will be your email marketing strategy (keeping in mind Canada’s anti-spam law)?</h5>'
+ '<p class="text-body">'+ACT25+'</p>'

+ '<h4 class="text-danger py-2">Advertising</h4>'
+ '<h5 class="text-secondary py-2">What is your advertising strategy? (pay per click, print, TV, radio etc.)</h5>'
+ '<p class="text-body">'+ACT31+'</p>'
+ '<h5 class="text-secondary py-2">What is your public relations strategy? Public relations includes efforts to woo editors or journalists to cover your business, and also having an action plan to protect your brand in a crisis scenario. </h5>'
+ '<p class="text-body">'+ACT32+'</p>'
+ '<h5 class="text-secondary py-2">What is your after-the-sale strategy? How will you ensure customers remain loyal and happy for the long-term?</h5>'
+ '<p class="text-body">'+ACT33+'</p>'

//Monitoring, Measuring, Improving

+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h3>Part 8</h3>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Monitoring, Measuring and Improving</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'
+ '<h5 class="text-secondary py-2"><b>How will you measure the effectiveness of your marketing activities?</b></h4>'
+ '<p class="text-body">'+monitor_q1+'</p>'
+ '<h5 class="text-secondary py-2"><b>How will you adjust to improve?</b></h4>'
+ '<p class="text-body">'+monitor_q2+'</p>'



+ '</div>';

var html= "<html><head>"+bs+"<style>"+styles+"</style></head><body>"
+ content
+ "</body></html>";

var myWindow = window.open("","Print","width=1024,height=800,scrollbars=1,resizable=1");
myWindow.document.write(html);

myWindow.print();
}

function Script3()
{
  var styles="th,td {width: 25%;}";
var bs= '<link rel="stylesheet" type="text/css" media="all" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">';

var player=GetPlayer();

//Define Your Brand
var brand_q1=player.GetVar("brand_q1");
var brand_q2=player.GetVar("brand_q2");
var brand_q3=player.GetVar("brand_q3");
var brand_q4=player.GetVar("brand_q4");
//Identify Your Customers
var PER11=player.GetVar("PER_1_1");
var PER12=player.GetVar("PER_1_2");
var PER13=player.GetVar("PER_1_3");
var PER14=player.GetVar("PER_1_4");
var PER15=player.GetVar("PER_1_5");
var PER21=player.GetVar("PER_2_1");
var PER22=player.GetVar("PER_2_2");
var PER23=player.GetVar("PER_2_3");
var PER24=player.GetVar("PER_2_4");
var PER25=player.GetVar("PER_2_5");
var PER31=player.GetVar("PER_3_1");
var PER32=player.GetVar("PER_3_2");
var PER33=player.GetVar("PER_3_3");
var PER34=player.GetVar("PER_3_4");
var PER35=player.GetVar("PER_3_5");
//Understand Your Competitors
var COM1q1=player.GetVar("COM_1_1");
var COM1q2=player.GetVar("COM_1_2");
var COM1q3=player.GetVar("COM_1_3");
var COM1q4=player.GetVar("COM_1_4");
var COM1q5=player.GetVar("COM_1_5");
var COM2q1=player.GetVar("COM_2_1");
var COM2q2=player.GetVar("COM_2_2");
var COM2q3=player.GetVar("COM_2_3");
var COM2q4=player.GetVar("COM_2_4");
var COM2q5=player.GetVar("COM_2_5");
var COM3q1=player.GetVar("COM_3_1");
var COM3q2=player.GetVar("COM_3_2");
var COM3q3=player.GetVar("COM_3_3");
var COM3q4=player.GetVar("COM_3_4");
var COM3q5=player.GetVar("COM_3_5");
var Name_Com1=player.GetVar("Name_Com1");
var Name_Com2=player.GetVar("Name_Com2");
var Name_Com3=player.GetVar("Name_Com3");

//Analyze Your Business
var A=player.GetVar("Strength");
var B=player.GetVar("Weakness");
var C=player.GetVar("Oppor");
var D=player.GetVar("Threat");
//Define Your Difference
var USP=player.GetVar("USP");
var EP=player.GetVar("EP");
//Map Your Customer's Journey
var map_q1_p1=player.GetVar("map_q1_p1");
var map_q1_p2=player.GetVar("map_q1_p2");
var map_q1_p3=player.GetVar("map_q1_p3");
var map_q2_p1=player.GetVar("map_q2_p1");
var map_q2_p2=player.GetVar("map_q2_p2");
var map_q2_p3=player.GetVar("map_q2_p3");
var map_q3_p1=player.GetVar("map_q3_p1");
var map_q3_p2=player.GetVar("map_q3_p2");
var map_q3_p3=player.GetVar("map_q3_p3");
var map_q4_p1=player.GetVar("map_q4_p1");
var map_q4_p2=player.GetVar("map_q4_p2");
var map_q4_p3=player.GetVar("map_q4_p3");
var map_q5_p1=player.GetVar("map_q5_p1");
var map_q5_p2=player.GetVar("map_q5_p2");
var map_q5_p3=player.GetVar("map_q5_p3");
//Create Your Action Plan
var ACT11=player.GetVar("act_1_q1");
var ACT12=player.GetVar("act_1_q2");
var ACT13=player.GetVar("act_1_q3");
var ACT14=player.GetVar("act_1_q4");
var ACT15=player.GetVar("act_1_q5");
var ACT21=player.GetVar("act_2_q1");
var ACT22=player.GetVar("act_2_q2");
var ACT23=player.GetVar("act_2_q3");
var ACT24=player.GetVar("act_2_q4");
var ACT25=player.GetVar("act_2_q5");
var ACT31=player.GetVar("act_3_q1");
var ACT32=player.GetVar("act_3_q2");
var ACT33=player.GetVar("act_3_q3");
//Monitoring, Measuring, Improving
var monitor_q1=player.GetVar("monitor_q1");
var monitor_q2=player.GetVar("monitor_q2");



var content='<div class="container">'

//Define Your Brand
+ '<div class="row">'
+ '<div class="col text-dark px-3 py-1 mb-1">'
+ '<h1 class="text-uppercase">Marketing <b>Plan</b></h1>'
+ '</div>'
+ '</div>'
+ '<br>'
+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h2>Part 1</h2>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Define Your Brand</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'

+ '<h5 class="text-secondary py-2"><b>What is your vision statement?</b></h4>'
+ '<p class="text-body">'+brand_q1+'</p>'
+ '<h5 class="text-secondary py-2"><b>What value does your organization provide to customers that no one else can?</b></h4>'
+ '<p class="text-body">'+brand_q2+'</p>'
+ '<h5 class="text-secondary py-2"><b>What is your positioning statement?</b></h4>'
+ '<p class="text-body">'+brand_q3+'</p>'
+ '<h5 class="text-secondary py-2"><b>How do you want to be perceived in the marketplace?</b></h4>'
+ '<p class="text-body">'+brand_q4+'</p>'

//Identify Your Customers

+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h2>Part 2</h2>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Identify Your Customers</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'

+ '<h4 class="text-danger py-2">Persona 1</h4>'
+ '<h5 class="text-secondary py-2"><b>What is their demographic profile?</b> (Age, sex, profession, income, social status, education, etc.)</h4>'
+ '<p class="text-body">'+PER11+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their values, attitudes, interests, needs and lifestyle choices?</b> What is important to them?</h4>'
+ '<p class="text-body">'+PER12+'</p>'
+ '<h5 class="text-secondary py-2"><b>How do they like to do business?</b> Online or face-to-face? How much do they spend? What kind of products do they buy? What do they want in terms of features, functionality and cost?</h4>'
+ '<p class="text-body">'+PER13+'</p>'
+ '<h5 class="text-secondary py-2"><b>Where are they located?</b></h4>'
+ '<p class="text-body">'+PER14+'</p>'
+ '<h5 class="text-secondary py-2"><b>Why would this person buy your product or service?</b></h4>'
+ '<p class="text-body">'+PER15+'</p>'

+ '<h4 class="text-danger py-2">Persona 2</h4>'
+ '<h5 class="text-secondary py-2"><b>What is their demographic profile?</b> (Age, sex, profession, income, social status, education, etc.)</h4>'
+ '<p class="text-body">'+PER21+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their values, attitudes, interests, needs and lifestyle choices?</b> What is important to them?</h4>'
+ '<p class="text-body">'+PER22+'</p>'
+ '<h5 class="text-secondary py-2"><b>How do they like to do business?</b> Online or face-to-face? How much do they spend? What kind of products do they buy? What do they want in terms of features, functionality and cost?</h4>'
+ '<p class="text-body">'+PER23+'</p>'
+ '<h5 class="text-secondary py-2"><b>Where are they located?</b></h4>'
+ '<p class="text-body">'+PER24+'</p>'
+ '<h5 class="text-secondary py-2"><b>Why would this person buy your product or service?</b></h4>'
+ '<p class="text-body">'+PER25+'</p>'

+ '<h4 class="text-danger py-2">Persona 3</h4>'
+ '<h5 class="text-secondary py-2"><b>What is their demographic profile?</b> (Age, sex, profession, income, social status, education, etc.)</h4>'
+ '<p class="text-body">'+PER31+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their values, attitudes, interests, needs and lifestyle choices?</b> What is important to them?</h4>'
+ '<p class="text-body">'+PER32+'</p>'
+ '<h5 class="text-secondary py-2"><b>How do they like to do business?</b> Online or face-to-face? How much do they spend? What kind of products do they buy? What do they want in terms of features, functionality and cost?</h4>'
+ '<p class="text-body">'+PER33+'</p>'
+ '<h5 class="text-secondary py-2"><b>Where are they located?</b></h4>'
+ '<p class="text-body">'+PER34+'</p>'
+ '<h5 class="text-secondary py-2"><b>Why would this person buy your product or service?</b></h4>'
+ '<p class="text-body">'+PER35+'</p>'

//Understand Your Competitors

+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h3>Part 3</h3>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Understand Your Competitors</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'

+ '<h4 class="text-danger py-2">'+Name_Com1+'</h4>'
+ '<h5 class="text-secondary py-2"><b>Where are they located?</b></h4>'
+ '<p class="text-body">'+COM1q1+'</p>'
+ '<h5 class="text-secondary py-2"><b>How long have they been in business?</b></h4>'
+ '<p class="text-body">'+COM1q2+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their target markets?</b></h4>'
+ '<p class="text-body">'+COM1q3+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their unique selling points, competitive differentiators?</b></h4>'
+ '<p class="text-body">'+COM1q4+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their strengths, weaknesses?</b></h4>'
+ '<p class="text-body">'+COM1q5+'</p>'

+ '<h4 class="text-danger py-2">'+Name_Com2+'</h4>'
+ '<h5 class="text-secondary py-2"><b>Where are they located?</b></h4>'
+ '<p class="text-body">'+COM2q1+'</p>'
+ '<h5 class="text-secondary py-2"><b>How long have they been in business?</b></h4>'
+ '<p class="text-body">'+COM2q2+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their target markets?</b></h4>'
+ '<p class="text-body">'+COM2q3+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their unique selling points, competitive differentiators?</b></h4>'
+ '<p class="text-body">'+COM2q4+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their strengths, weaknesses?</b></h4>'
+ '<p class="text-body">'+COM2q5+'</p>'

+ '<h4 class="text-danger py-2">'+Name_Com3+'</h4>'
+ '<h5 class="text-secondary py-2"><b>Where are they located?</b></h4>'
+ '<p class="text-body">'+COM3q1+'</p>'
+ '<h5 class="text-secondary py-2"><b>How long have they been in business?</b></h4>'
+ '<p class="text-body">'+COM3q2+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their target markets?</b></h4>'
+ '<p class="text-body">'+COM3q3+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their unique selling points, competitive differentiators?</b></h4>'
+ '<p class="text-body">'+COM3q4+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their strengths, weaknesses?</b></h4>'
+ '<p class="text-body">'+COM3q5+'</p>'

//Analyze Your Business

+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h3>Part 4</h3>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Analyze Your Business</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'

+ '<h4 class="text-danger py-2">Strengths</h4>'
+ '<h5 class="text-secondary py-2">What characteristics does your business possess that give it an advantage over others? </h4>'
+ '<p class="text-body">'+A+'</p>'
+ '<h4 class="text-danger py-2">Weaknesses</h4>'
+ '<h5 class="text-secondary py-2">What places your business at a disadvantage versus others? Address these weaknesses immediately.</h4>'
+ '<p class="text-body">'+B+'</p>'
+ '<h4 class="text-danger py-2">Opportunities</h4>'
+ '<h5 class="text-secondary py-2">What conditions or situations in the marketplace or in your competitors’ offerings could you exploit to your advantage?</h4>'
+ '<p class="text-body">'+C+'</p>'
+ '<h4 class="text-danger py-2">Threats</h4>'
+ '<h5 class="text-secondary py-2">What conditions or situations in the marketplace, or activities by your competition, could work against you?</h4>'
+ '<p class="text-body">'+D+'</p>'

//Define Your Difference

+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h3>Part 5</h3>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Define Your Difference</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'
+ '<h5 class="text-secondary py-2">What is your value proposition?</h5>'
+ '<p class="text-body">'+USP+'</p>'
+ '<h5 class="text-secondary py-2">What is your elevator pitch?</h5>'
+ '<p class="text-body">'+EP+'</p>'

//Map Your Customer's Journey

+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h3>Part 6</h3>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Map Your Customer\'s Journey</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'

+ '<h4 class="text-danger py-2">Persona 1</h4>'
+ '<h5 class="text-secondary py-2"><b>Attention</b> – How will you make your ideal customer aware of your business?</h4>'
+ '<p class="text-body">'+map_q1_p1+'</p>'
+ '<h5 class="text-secondary py-2"><b>Interest</b> – How will you get them interested in your business?</h4>'
+ '<p class="text-body">'+map_q2_p1+'</p>'
+ '<h5 class="text-secondary py-2"><b>Desire</b> – How will you create a desire to purchase?</h4>'
+ '<p class="text-body">'+map_q3_p1+'</p>'
+ '<h5 class="text-secondary py-2"><b>Action</b> – How will you get them to take action and make a purchase?</h4>'
+ '<p class="text-body">'+map_q4_p1+'</p>'
+ '<h5 class="text-secondary py-2"><b>Loyalty</b> – How will you make them loyal to your business?</h4>'
+ '<p class="text-body">'+map_q5_p1+'</p>'

+ '<h4 class="text-danger py-2">Persona 2</h4>'
+ '<h5 class="text-secondary py-2"><b>Attention</b> – How will you make your ideal customer aware of your business?</h4>'
+ '<p class="text-body">'+map_q1_p2+'</p>'
+ '<h5 class="text-secondary py-2"><b>Interest</b> – How will you get them interested in your business?</h4>'
+ '<p class="text-body">'+map_q2_p2+'</p>'
+ '<h5 class="text-secondary py-2"><b>Desire</b> – How will you create a desire to purchase?</h4>'
+ '<p class="text-body">'+map_q3_p2+'</p>'
+ '<h5 class="text-secondary py-2"><b>Action</b> – How will you get them to take action and make a purchase?</h4>'
+ '<p class="text-body">'+map_q4_p2+'</p>'
+ '<h5 class="text-secondary py-2"><b>Loyalty</b> – How will you make them loyal to your business?</h4>'
+ '<p class="text-body">'+map_q5_p2+'</p>'

+ '<h4 class="text-danger py-2">Persona 3</h4>'
+ '<h5 class="text-secondary py-2"><b>Attention</b> – How will you make your ideal customer aware of your business?</h4>'
+ '<p class="text-body">'+map_q1_p3+'</p>'
+ '<h5 class="text-secondary py-2"><b>Interest</b> – How will you get them interested in your business?</h4>'
+ '<p class="text-body">'+map_q2_p3+'</p>'
+ '<h5 class="text-secondary py-2"><b>Desire</b> – How will you create a desire to purchase?</h4>'
+ '<p class="text-body">'+map_q3_p3+'</p>'
+ '<h5 class="text-secondary py-2"><b>Action</b> – How will you get them to take action and make a purchase?</h4>'
+ '<p class="text-body">'+map_q4_p3+'</p>'
+ '<h5 class="text-secondary py-2"><b>Loyalty</b> – How will you make them loyal to your business?</h4>'
+ '<p class="text-body">'+map_q5_p3+'</p>'

//Create Your Action Plan

+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h3>Part 7</h3>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Create Your Action Plan</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'

+ '<h4 class="text-danger py-2">Resources</h4>'
+ '<h5 class="text-secondary py-2">What is your marketing budget? How much can you afford to spend this year?</h5>'
+ '<p class="text-body">'+ACT11+'</p>'
+ '<h5 class="text-secondary py-2">Who is on your marketing team?</h5>'
+ '<p class="text-body">'+ACT12+'</p>'
+ '<h5 class="text-secondary py-2">Who is responsible for what?</h5>'
+ '<p class="text-body">'+ACT13+'</p>'
+ '<h5 class="text-secondary py-2">What is your pricing strategy?</h5>'
+ '<p class="text-body">'+ACT14+'</p>'
+ '<h5 class="text-secondary py-2">How will you distribute your goods or services?</h5>'
+ '<p class="text-body">'+ACT15+'</p>'

+ '<h4 class="text-danger py-2">Website</h4>'
+ '<h5 class="text-secondary py-2"><b>Design:</b> How will you get a modern, attractive, effective website? </h5>'
+ '<p class="text-body">'+ACT21+'</p>'
+ '<h5 class="text-secondary py-2"><b>Content:</b> What kind of content will you produce? Who will be responsible for regularly producing and managing it?</h5>'
+ '<p class="text-body">'+ACT22+'</p>'
+ '<h5 class="text-secondary py-2"><b>Search Engine Optimization:</b> How will you optimize your site so your content ranks high on search engine results?</h5>'
+ '<p class="text-body">'+ACT23+'</p>'
+ '<h5 class="text-secondary py-2">What is your social media strategy? What platforms make sense for your business? Who will plan and manage your communities and respond to questions?</h5>'
+ '<p class="text-body">'+ACT24+'</p>'
+ '<h5 class="text-secondary py-2">What will be your email marketing strategy (keeping in mind Canada’s anti-spam law)?</h5>'
+ '<p class="text-body">'+ACT25+'</p>'

+ '<h4 class="text-danger py-2">Advertising</h4>'
+ '<h5 class="text-secondary py-2">What is your advertising strategy? (pay per click, print, TV, radio etc.)</h5>'
+ '<p class="text-body">'+ACT31+'</p>'
+ '<h5 class="text-secondary py-2">What is your public relations strategy? Public relations includes efforts to woo editors or journalists to cover your business, and also having an action plan to protect your brand in a crisis scenario. </h5>'
+ '<p class="text-body">'+ACT32+'</p>'
+ '<h5 class="text-secondary py-2">What is your after-the-sale strategy? How will you ensure customers remain loyal and happy for the long-term?</h5>'
+ '<p class="text-body">'+ACT33+'</p>'

//Monitoring, Measuring, Improving

+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h3>Part 8</h3>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Monitoring, Measuring and Improving</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'
+ '<h5 class="text-secondary py-2"><b>How will you measure the effectiveness of your marketing activities?</b></h4>'
+ '<p class="text-body">'+monitor_q1+'</p>'
+ '<h5 class="text-secondary py-2"><b>How will you adjust to improve?</b></h4>'
+ '<p class="text-body">'+monitor_q2+'</p>'



+ '</div>';

var html= "<html><head>"+bs+"<style>"+styles+"</style></head><body>"
+ content
+ "</body></html>";

var myWindow = window.open("","Print","width=1024,height=800,scrollbars=1,resizable=1");
myWindow.document.write(html);

myWindow.print();
}

function Script4()
{
  var styles="th,td {width: 25%;}";
// var bs='<link rel="stylesheet" type="text/css" media="all" href="./bs/bootstrap.min.css">';
var bs= '<link rel="stylesheet" type="text/css" media="all" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">';
// var logo_url = "./img/logo.png";
//var logo_url = "https://arthalearning.com/wp-content/uploads/2018/08/logo.png";

var player=GetPlayer();
var PER11=player.GetVar("PER_1_1");
var PER12=player.GetVar("PER_1_2");
var PER13=player.GetVar("PER_1_3");
var PER14=player.GetVar("PER_1_4");
var PER15=player.GetVar("PER_1_5");
var PER21=player.GetVar("PER_2_1");
var PER22=player.GetVar("PER_2_2");
var PER23=player.GetVar("PER_2_3");
var PER24=player.GetVar("PER_2_4");
var PER25=player.GetVar("PER_2_5");
var PER31=player.GetVar("PER_3_1");
var PER32=player.GetVar("PER_3_2");
var PER33=player.GetVar("PER_3_3");
var PER34=player.GetVar("PER_3_4");
var PER35=player.GetVar("PER_3_5");


var content='<div class="container">'
//+ '<img src="'+logo_url+'" alt="logo" width="263" height="72" class="my-3">'
+ '<div class="row">'
+ '<div class="col text-dark px-3 py-1 mb-1">'
+ '<h1 class="text-uppercase">Marketing <b>Plan</b></h1>'
+ '</div>'
+ '</div>'
+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h3>Part 2</h3>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Identify Your Customers</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'
//+ '<p class="text-secondary">A strong brand is the foundation for your company’s success. To build a great brand, you need to be clear about why you’re in business and where you want to take your company.</p>'
+ '<h4 class="text-danger py-2">Persona 1</h4>'
+ '<h5 class="text-secondary py-2"><b>What is their demographic profile?</b> (Age, sex, profession, income, social status, education, etc.)</h4>'
+ '<p class="text-body">'+PER11+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their values, attitudes, interests, needs and lifestyle choices?</b> What is important to them?</h4>'
+ '<p class="text-body">'+PER12+'</p>'
+ '<h5 class="text-secondary py-2"><b>How do they like to do business?</b> Online or face-to-face? How much do they spend? What kind of products do they buy? What do they want in terms of features, functionality and cost?</h4>'
+ '<p class="text-body">'+PER13+'</p>'
+ '<h5 class="text-secondary py-2"><b>Where are they located?</b></h4>'
+ '<p class="text-body">'+PER14+'</p>'
+ '<h5 class="text-secondary py-2"><b>Why would this person buy your product or service?</b></h4>'
+ '<p class="text-body">'+PER15+'</p>'

+ '<h4 class="text-danger py-2">Persona 2</h4>'
+ '<h5 class="text-secondary py-2"><b>What is their demographic profile?</b> (Age, sex, profession, income, social status, education, etc.)</h4>'
+ '<p class="text-body">'+PER21+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their values, attitudes, interests, needs and lifestyle choices?</b> What is important to them?</h4>'
+ '<p class="text-body">'+PER22+'</p>'
+ '<h5 class="text-secondary py-2"><b>How do they like to do business?</b> Online or face-to-face? How much do they spend? What kind of products do they buy? What do they want in terms of features, functionality and cost?</h4>'
+ '<p class="text-body">'+PER23+'</p>'
+ '<h5 class="text-secondary py-2"><b>Where are they located?</b></h4>'
+ '<p class="text-body">'+PER24+'</p>'
+ '<h5 class="text-secondary py-2"><b>Why would this person buy your product or service?</b></h4>'
+ '<p class="text-body">'+PER25+'</p>'

+ '<h4 class="text-danger py-2">Persona 3</h4>'
+ '<h5 class="text-secondary py-2"><b>What is their demographic profile?</b> (Age, sex, profession, income, social status, education, etc.)</h4>'
+ '<p class="text-body">'+PER31+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their values, attitudes, interests, needs and lifestyle choices?</b> What is important to them?</h4>'
+ '<p class="text-body">'+PER32+'</p>'
+ '<h5 class="text-secondary py-2"><b>How do they like to do business?</b> Online or face-to-face? How much do they spend? What kind of products do they buy? What do they want in terms of features, functionality and cost?</h4>'
+ '<p class="text-body">'+PER33+'</p>'
+ '<h5 class="text-secondary py-2"><b>Where are they located?</b></h4>'
+ '<p class="text-body">'+PER34+'</p>'
+ '<h5 class="text-secondary py-2"><b>Why would this person buy your product or service?</b></h4>'
+ '<p class="text-body">'+PER35+'</p>'

+ '</div>';

var html= "<html><head>"+bs+"<style>"+styles+"</style></head><body>"
+ content
+ "</body></html>";

var myWindow = window.open("","Print","width=1024,height=800,scrollbars=1,resizable=1");
myWindow.document.write(html);

myWindow.print();
}

function Script5()
{
  var styles="th,td {width: 25%;}";
var bs= '<link rel="stylesheet" type="text/css" media="all" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">';

var player=GetPlayer();

//Define Your Brand
var brand_q1=player.GetVar("brand_q1");
var brand_q2=player.GetVar("brand_q2");
var brand_q3=player.GetVar("brand_q3");
var brand_q4=player.GetVar("brand_q4");
//Identify Your Customers
var PER11=player.GetVar("PER_1_1");
var PER12=player.GetVar("PER_1_2");
var PER13=player.GetVar("PER_1_3");
var PER14=player.GetVar("PER_1_4");
var PER15=player.GetVar("PER_1_5");
var PER21=player.GetVar("PER_2_1");
var PER22=player.GetVar("PER_2_2");
var PER23=player.GetVar("PER_2_3");
var PER24=player.GetVar("PER_2_4");
var PER25=player.GetVar("PER_2_5");
var PER31=player.GetVar("PER_3_1");
var PER32=player.GetVar("PER_3_2");
var PER33=player.GetVar("PER_3_3");
var PER34=player.GetVar("PER_3_4");
var PER35=player.GetVar("PER_3_5");
//Understand Your Competitors
var COM1q1=player.GetVar("COM_1_1");
var COM1q2=player.GetVar("COM_1_2");
var COM1q3=player.GetVar("COM_1_3");
var COM1q4=player.GetVar("COM_1_4");
var COM1q5=player.GetVar("COM_1_5");
var COM2q1=player.GetVar("COM_2_1");
var COM2q2=player.GetVar("COM_2_2");
var COM2q3=player.GetVar("COM_2_3");
var COM2q4=player.GetVar("COM_2_4");
var COM2q5=player.GetVar("COM_2_5");
var COM3q1=player.GetVar("COM_3_1");
var COM3q2=player.GetVar("COM_3_2");
var COM3q3=player.GetVar("COM_3_3");
var COM3q4=player.GetVar("COM_3_4");
var COM3q5=player.GetVar("COM_3_5");
var Name_Com1=player.GetVar("Name_Com1");
var Name_Com2=player.GetVar("Name_Com2");
var Name_Com3=player.GetVar("Name_Com3");

//Analyze Your Business
var A=player.GetVar("Strength");
var B=player.GetVar("Weakness");
var C=player.GetVar("Oppor");
var D=player.GetVar("Threat");
//Define Your Difference
var USP=player.GetVar("USP");
var EP=player.GetVar("EP");
//Map Your Customer's Journey
var map_q1_p1=player.GetVar("map_q1_p1");
var map_q1_p2=player.GetVar("map_q1_p2");
var map_q1_p3=player.GetVar("map_q1_p3");
var map_q2_p1=player.GetVar("map_q2_p1");
var map_q2_p2=player.GetVar("map_q2_p2");
var map_q2_p3=player.GetVar("map_q2_p3");
var map_q3_p1=player.GetVar("map_q3_p1");
var map_q3_p2=player.GetVar("map_q3_p2");
var map_q3_p3=player.GetVar("map_q3_p3");
var map_q4_p1=player.GetVar("map_q4_p1");
var map_q4_p2=player.GetVar("map_q4_p2");
var map_q4_p3=player.GetVar("map_q4_p3");
var map_q5_p1=player.GetVar("map_q5_p1");
var map_q5_p2=player.GetVar("map_q5_p2");
var map_q5_p3=player.GetVar("map_q5_p3");
//Create Your Action Plan
var ACT11=player.GetVar("act_1_q1");
var ACT12=player.GetVar("act_1_q2");
var ACT13=player.GetVar("act_1_q3");
var ACT14=player.GetVar("act_1_q4");
var ACT15=player.GetVar("act_1_q5");
var ACT21=player.GetVar("act_2_q1");
var ACT22=player.GetVar("act_2_q2");
var ACT23=player.GetVar("act_2_q3");
var ACT24=player.GetVar("act_2_q4");
var ACT25=player.GetVar("act_2_q5");
var ACT31=player.GetVar("act_3_q1");
var ACT32=player.GetVar("act_3_q2");
var ACT33=player.GetVar("act_3_q3");
//Monitoring, Measuring, Improving
var monitor_q1=player.GetVar("monitor_q1");
var monitor_q2=player.GetVar("monitor_q2");



var content='<div class="container">'

//Define Your Brand
+ '<div class="row">'
+ '<div class="col text-dark px-3 py-1 mb-1">'
+ '<h1 class="text-uppercase">Marketing <b>Plan</b></h1>'
+ '</div>'
+ '</div>'
+ '<br>'
+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h2>Part 1</h2>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Define Your Brand</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'

+ '<h5 class="text-secondary py-2"><b>What is your vision statement?</b></h4>'
+ '<p class="text-body">'+brand_q1+'</p>'
+ '<h5 class="text-secondary py-2"><b>What value does your organization provide to customers that no one else can?</b></h4>'
+ '<p class="text-body">'+brand_q2+'</p>'
+ '<h5 class="text-secondary py-2"><b>What is your positioning statement?</b></h4>'
+ '<p class="text-body">'+brand_q3+'</p>'
+ '<h5 class="text-secondary py-2"><b>How do you want to be perceived in the marketplace?</b></h4>'
+ '<p class="text-body">'+brand_q4+'</p>'

//Identify Your Customers

+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h2>Part 2</h2>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Identify Your Customers</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'

+ '<h4 class="text-danger py-2">Persona 1</h4>'
+ '<h5 class="text-secondary py-2"><b>What is their demographic profile?</b> (Age, sex, profession, income, social status, education, etc.)</h4>'
+ '<p class="text-body">'+PER11+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their values, attitudes, interests, needs and lifestyle choices?</b> What is important to them?</h4>'
+ '<p class="text-body">'+PER12+'</p>'
+ '<h5 class="text-secondary py-2"><b>How do they like to do business?</b> Online or face-to-face? How much do they spend? What kind of products do they buy? What do they want in terms of features, functionality and cost?</h4>'
+ '<p class="text-body">'+PER13+'</p>'
+ '<h5 class="text-secondary py-2"><b>Where are they located?</b></h4>'
+ '<p class="text-body">'+PER14+'</p>'
+ '<h5 class="text-secondary py-2"><b>Why would this person buy your product or service?</b></h4>'
+ '<p class="text-body">'+PER15+'</p>'

+ '<h4 class="text-danger py-2">Persona 2</h4>'
+ '<h5 class="text-secondary py-2"><b>What is their demographic profile?</b> (Age, sex, profession, income, social status, education, etc.)</h4>'
+ '<p class="text-body">'+PER21+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their values, attitudes, interests, needs and lifestyle choices?</b> What is important to them?</h4>'
+ '<p class="text-body">'+PER22+'</p>'
+ '<h5 class="text-secondary py-2"><b>How do they like to do business?</b> Online or face-to-face? How much do they spend? What kind of products do they buy? What do they want in terms of features, functionality and cost?</h4>'
+ '<p class="text-body">'+PER23+'</p>'
+ '<h5 class="text-secondary py-2"><b>Where are they located?</b></h4>'
+ '<p class="text-body">'+PER24+'</p>'
+ '<h5 class="text-secondary py-2"><b>Why would this person buy your product or service?</b></h4>'
+ '<p class="text-body">'+PER25+'</p>'

+ '<h4 class="text-danger py-2">Persona 3</h4>'
+ '<h5 class="text-secondary py-2"><b>What is their demographic profile?</b> (Age, sex, profession, income, social status, education, etc.)</h4>'
+ '<p class="text-body">'+PER31+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their values, attitudes, interests, needs and lifestyle choices?</b> What is important to them?</h4>'
+ '<p class="text-body">'+PER32+'</p>'
+ '<h5 class="text-secondary py-2"><b>How do they like to do business?</b> Online or face-to-face? How much do they spend? What kind of products do they buy? What do they want in terms of features, functionality and cost?</h4>'
+ '<p class="text-body">'+PER33+'</p>'
+ '<h5 class="text-secondary py-2"><b>Where are they located?</b></h4>'
+ '<p class="text-body">'+PER34+'</p>'
+ '<h5 class="text-secondary py-2"><b>Why would this person buy your product or service?</b></h4>'
+ '<p class="text-body">'+PER35+'</p>'

//Understand Your Competitors

+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h3>Part 3</h3>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Understand Your Competitors</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'

+ '<h4 class="text-danger py-2">'+Name_Com1+'</h4>'
+ '<h5 class="text-secondary py-2"><b>Where are they located?</b></h4>'
+ '<p class="text-body">'+COM1q1+'</p>'
+ '<h5 class="text-secondary py-2"><b>How long have they been in business?</b></h4>'
+ '<p class="text-body">'+COM1q2+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their target markets?</b></h4>'
+ '<p class="text-body">'+COM1q3+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their unique selling points, competitive differentiators?</b></h4>'
+ '<p class="text-body">'+COM1q4+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their strengths, weaknesses?</b></h4>'
+ '<p class="text-body">'+COM1q5+'</p>'

+ '<h4 class="text-danger py-2">'+Name_Com2+'</h4>'
+ '<h5 class="text-secondary py-2"><b>Where are they located?</b></h4>'
+ '<p class="text-body">'+COM2q1+'</p>'
+ '<h5 class="text-secondary py-2"><b>How long have they been in business?</b></h4>'
+ '<p class="text-body">'+COM2q2+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their target markets?</b></h4>'
+ '<p class="text-body">'+COM2q3+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their unique selling points, competitive differentiators?</b></h4>'
+ '<p class="text-body">'+COM2q4+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their strengths, weaknesses?</b></h4>'
+ '<p class="text-body">'+COM2q5+'</p>'

+ '<h4 class="text-danger py-2">'+Name_Com3+'</h4>'
+ '<h5 class="text-secondary py-2"><b>Where are they located?</b></h4>'
+ '<p class="text-body">'+COM3q1+'</p>'
+ '<h5 class="text-secondary py-2"><b>How long have they been in business?</b></h4>'
+ '<p class="text-body">'+COM3q2+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their target markets?</b></h4>'
+ '<p class="text-body">'+COM3q3+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their unique selling points, competitive differentiators?</b></h4>'
+ '<p class="text-body">'+COM3q4+'</p>'
+ '<h5 class="text-secondary py-2"><b>What are their strengths, weaknesses?</b></h4>'
+ '<p class="text-body">'+COM3q5+'</p>'

//Analyze Your Business

+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h3>Part 4</h3>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Analyze Your Business</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'

+ '<h4 class="text-danger py-2">Strengths</h4>'
+ '<h5 class="text-secondary py-2">What characteristics does your business possess that give it an advantage over others? </h4>'
+ '<p class="text-body">'+A+'</p>'
+ '<h4 class="text-danger py-2">Weaknesses</h4>'
+ '<h5 class="text-secondary py-2">What places your business at a disadvantage versus others? Address these weaknesses immediately.</h4>'
+ '<p class="text-body">'+B+'</p>'
+ '<h4 class="text-danger py-2">Opportunities</h4>'
+ '<h5 class="text-secondary py-2">What conditions or situations in the marketplace or in your competitors’ offerings could you exploit to your advantage?</h4>'
+ '<p class="text-body">'+C+'</p>'
+ '<h4 class="text-danger py-2">Threats</h4>'
+ '<h5 class="text-secondary py-2">What conditions or situations in the marketplace, or activities by your competition, could work against you?</h4>'
+ '<p class="text-body">'+D+'</p>'

//Define Your Difference

+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h3>Part 5</h3>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Define Your Difference</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'
+ '<h5 class="text-secondary py-2">What is your value proposition?</h5>'
+ '<p class="text-body">'+USP+'</p>'
+ '<h5 class="text-secondary py-2">What is your elevator pitch?</h5>'
+ '<p class="text-body">'+EP+'</p>'

//Map Your Customer's Journey

+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h3>Part 6</h3>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Map Your Customer\'s Journey</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'

+ '<h4 class="text-danger py-2">Persona 1</h4>'
+ '<h5 class="text-secondary py-2"><b>Attention</b> – How will you make your ideal customer aware of your business?</h4>'
+ '<p class="text-body">'+map_q1_p1+'</p>'
+ '<h5 class="text-secondary py-2"><b>Interest</b> – How will you get them interested in your business?</h4>'
+ '<p class="text-body">'+map_q2_p1+'</p>'
+ '<h5 class="text-secondary py-2"><b>Desire</b> – How will you create a desire to purchase?</h4>'
+ '<p class="text-body">'+map_q3_p1+'</p>'
+ '<h5 class="text-secondary py-2"><b>Action</b> – How will you get them to take action and make a purchase?</h4>'
+ '<p class="text-body">'+map_q4_p1+'</p>'
+ '<h5 class="text-secondary py-2"><b>Loyalty</b> – How will you make them loyal to your business?</h4>'
+ '<p class="text-body">'+map_q5_p1+'</p>'

+ '<h4 class="text-danger py-2">Persona 2</h4>'
+ '<h5 class="text-secondary py-2"><b>Attention</b> – How will you make your ideal customer aware of your business?</h4>'
+ '<p class="text-body">'+map_q1_p2+'</p>'
+ '<h5 class="text-secondary py-2"><b>Interest</b> – How will you get them interested in your business?</h4>'
+ '<p class="text-body">'+map_q2_p2+'</p>'
+ '<h5 class="text-secondary py-2"><b>Desire</b> – How will you create a desire to purchase?</h4>'
+ '<p class="text-body">'+map_q3_p2+'</p>'
+ '<h5 class="text-secondary py-2"><b>Action</b> – How will you get them to take action and make a purchase?</h4>'
+ '<p class="text-body">'+map_q4_p2+'</p>'
+ '<h5 class="text-secondary py-2"><b>Loyalty</b> – How will you make them loyal to your business?</h4>'
+ '<p class="text-body">'+map_q5_p2+'</p>'

+ '<h4 class="text-danger py-2">Persona 3</h4>'
+ '<h5 class="text-secondary py-2"><b>Attention</b> – How will you make your ideal customer aware of your business?</h4>'
+ '<p class="text-body">'+map_q1_p3+'</p>'
+ '<h5 class="text-secondary py-2"><b>Interest</b> – How will you get them interested in your business?</h4>'
+ '<p class="text-body">'+map_q2_p3+'</p>'
+ '<h5 class="text-secondary py-2"><b>Desire</b> – How will you create a desire to purchase?</h4>'
+ '<p class="text-body">'+map_q3_p3+'</p>'
+ '<h5 class="text-secondary py-2"><b>Action</b> – How will you get them to take action and make a purchase?</h4>'
+ '<p class="text-body">'+map_q4_p3+'</p>'
+ '<h5 class="text-secondary py-2"><b>Loyalty</b> – How will you make them loyal to your business?</h4>'
+ '<p class="text-body">'+map_q5_p3+'</p>'

//Create Your Action Plan

+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h3>Part 7</h3>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Create Your Action Plan</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'

+ '<h4 class="text-danger py-2">Resources</h4>'
+ '<h5 class="text-secondary py-2">What is your marketing budget? How much can you afford to spend this year?</h5>'
+ '<p class="text-body">'+ACT11+'</p>'
+ '<h5 class="text-secondary py-2">Who is on your marketing team?</h5>'
+ '<p class="text-body">'+ACT12+'</p>'
+ '<h5 class="text-secondary py-2">Who is responsible for what?</h5>'
+ '<p class="text-body">'+ACT13+'</p>'
+ '<h5 class="text-secondary py-2">What is your pricing strategy?</h5>'
+ '<p class="text-body">'+ACT14+'</p>'
+ '<h5 class="text-secondary py-2">How will you distribute your goods or services?</h5>'
+ '<p class="text-body">'+ACT15+'</p>'

+ '<h4 class="text-danger py-2">Website</h4>'
+ '<h5 class="text-secondary py-2"><b>Design:</b> How will you get a modern, attractive, effective website? </h5>'
+ '<p class="text-body">'+ACT21+'</p>'
+ '<h5 class="text-secondary py-2"><b>Content:</b> What kind of content will you produce? Who will be responsible for regularly producing and managing it?</h5>'
+ '<p class="text-body">'+ACT22+'</p>'
+ '<h5 class="text-secondary py-2"><b>Search Engine Optimization:</b> How will you optimize your site so your content ranks high on search engine results?</h5>'
+ '<p class="text-body">'+ACT23+'</p>'
+ '<h5 class="text-secondary py-2">What is your social media strategy? What platforms make sense for your business? Who will plan and manage your communities and respond to questions?</h5>'
+ '<p class="text-body">'+ACT24+'</p>'
+ '<h5 class="text-secondary py-2">What will be your email marketing strategy (keeping in mind Canada’s anti-spam law)?</h5>'
+ '<p class="text-body">'+ACT25+'</p>'

+ '<h4 class="text-danger py-2">Advertising</h4>'
+ '<h5 class="text-secondary py-2">What is your advertising strategy? (pay per click, print, TV, radio etc.)</h5>'
+ '<p class="text-body">'+ACT31+'</p>'
+ '<h5 class="text-secondary py-2">What is your public relations strategy? Public relations includes efforts to woo editors or journalists to cover your business, and also having an action plan to protect your brand in a crisis scenario. </h5>'
+ '<p class="text-body">'+ACT32+'</p>'
+ '<h5 class="text-secondary py-2">What is your after-the-sale strategy? How will you ensure customers remain loyal and happy for the long-term?</h5>'
+ '<p class="text-body">'+ACT33+'</p>'

//Monitoring, Measuring, Improving

+ '<div class="row">'
+ '<div class="col-md-auto py-1">'
+ '<h3>Part 8</h3>'
+ '</div>'
+ '<div class="col text-secondary py-1">'
+ '<h3>Monitoring, Measuring and Improving</h3>'
+ '</div>'
+ '</div>'
+ '<hr>'
+ '<h5 class="text-secondary py-2"><b>How will you measure the effectiveness of your marketing activities?</b></h4>'
+ '<p class="text-body">'+monitor_q1+'</p>'
+ '<h5 class="text-secondary py-2"><b>How will you adjust to improve?</b></h4>'
+ '<p class="text-body">'+monitor_q2+'</p>'



+ '</div>';

var html= "<html><head>"+bs+"<style>"+styles+"</style></head><body>"
+ content
+ "</body></html>";

var myWindow = window.open("","Print","width=1024,height=800,scrollbars=1,resizable=1");
myWindow.document.write(html);

myWindow.print();
}

