function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5YL3UutwuHT":
        Script1();
        break;
      case "6OfKuER3cmc":
        Script2();
        break;
      case "5exzmTQeNzG":
        Script3();
        break;
      case "6Z69wrXv6EY":
        Script4();
        break;
      case "6PlkKcsJBat":
        Script5();
        break;
      case "6rPpuLYoscN":
        Script6();
        break;
      case "6p9p7x5q7Hb":
        Script7();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var NB = player.GetVar("NotebookText");
var Add = player.GetVar("Info_Bg");
var SL_NB = NB.concat("<br>").concat(Add).concat("<br>");
player.SetVar("NotebookText",SL_NB);
}

function Script2()
{
  var player = GetPlayer();
var NB = player.GetVar("NotebookText");
var Add = player.GetVar("Info_Promo");
var SL_NB = NB.concat("<br>").concat(Add).concat("<br>");
player.SetVar("NotebookText",SL_NB);
}

function Script3()
{
  var player = GetPlayer();
var NB = player.GetVar("NotebookText");
var Add = player.GetVar("Info_Debrief");
var SL_NB = NB.concat("<br>").concat(Add).concat("<br>");
player.SetVar("NotebookText",SL_NB);
}

function Script4()
{
  var player = GetPlayer();
var NB = player.GetVar("NotebookText");
var Add = player.GetVar("Info_Q1");
var SL_NB = NB.concat("<br>").concat(Add).concat("<br>");
player.SetVar("NotebookText",SL_NB);
}

function Script5()
{
  var player = GetPlayer();
var NB = player.GetVar("NotebookText");
var Add = player.GetVar("Info_Q2");
var SL_NB = NB.concat("<br>").concat(Add).concat("<br>");
player.SetVar("NotebookText",SL_NB);
}

function Script6()
{
  var player = GetPlayer();
var NB = player.GetVar("NotebookText");
var Add = player.GetVar("Info_Q3");
var SL_NB = NB.concat("<br>").concat(Add).concat("<br>");
player.SetVar("NotebookText",SL_NB);
}

function Script7()
{
  var player = GetPlayer();
var NB = player.GetVar("NotebookText");
var Add = player.GetVar("Info_Fin");
var SL_NB = NB.concat("<br>").concat(Add).concat("<br>");
player.SetVar("NotebookText",SL_NB);
}

