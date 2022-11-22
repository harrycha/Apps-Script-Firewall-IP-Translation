// Sets the first row and then calls further functions for going into folders and parsing data 
function listFilesAndFolders() {
  var folderid = 'Top Level Directory'; // change FolderID
  var sh = SpreadsheetApp.getActiveSheet();
  sh.clear();
  sh.appendRow(["IP Address","Firewall Name", "Fireflow", "Owner"]);
  try {
    var parentFolder =DriveApp.getFolderById(folderid);
    listFiles(parentFolder,parentFolder.getName())
    listSubFolders(parentFolder,parentFolder.getName());
  } catch (e) {
    Logger.log(e.toString());
  }
}

// Gets all folders within the top diretory
function listSubFolders(parentFolder,parent) {
  var childFolders = parentFolder.getFolders();
  while (childFolders.hasNext()) {
    var childFolder = childFolders.next();
    Logger.log("Fold : " + childFolder.getName());
    listFiles(childFolder,parent)
    listSubFolders(childFolder,parent + "|" + childFolder.getName());
  }
}

// Gets all the files withing the folder 
function listFiles(fold,parent){
  var sh = SpreadsheetApp.getActiveSheet();
  var data = [];
  var files = fold.getFiles();
  while (files.hasNext()) {
    var file = files.next();
    var fileName = file.getName();
    Logger.log(fileName)
    // convertExcelToGoogleSheets(fileName)
    var ownerName = fold.getName();
    var fireflowName = file.getName();
    fileID = file.getId();
    var ipData = loadData(fileID);
    appendDatatoDatabase(ipData,fireflowName, ownerName)
  }
}

// Loading data from each file
function loadData(fileID) {
  // Using Columns !C2:D but should really search by column name
  return importRange(fileID, "FireFlow Record !C2:D");
};

// using fileID and column range we fetch data
function importRange(sourceID, sourceRange) {
  const sourceSS = SpreadsheetApp.openById(sourceID);
  const sourceRng = sourceSS.getRange(sourceRange);
  const sourceVals = sourceRng.getValues();
  var filteredSourceVals = sourceVals.reduce(reducer, [])
  Logger.log(filteredSourceVals)
  // clean data with "#N/A"
  var naArray = ["#N/A"];
  const newarr = filteredSourceVals.filter(v => !(naArray));
  Logger.log(newarr)
  
  return filteredSourceVals
};

// Reducer gets rid of empty lists within the data object thus filters values
function reducer(res, item) {
  if (!item) return res;
  if (Array.isArray(item)) {
    var obj = item.reduce(reducer, [])
    if (obj.length > 0) {
      res.push(obj)
    }
    return res;
  }
  res.push(item);
  return res;
}

// confirms if a string contains "#N/A"
function checkForNA(testArray){
  if (testArray.toString()==="#N/A"){
    return true;
} else {
    return false;

}
}

// Actually writing in the data
function appendDatatoDatabase(data, fireflowNumber, operatorName){
  for(var i = 0; i < data.length; i++) {
    if (!checkForNA(data[i])){
      fireflowData = data[i].concat([fireflowNumber, operatorName]);
      SpreadsheetApp.getActiveSheet().appendRow(fireflowData);
    } else {
      continue      
    }
  }    
}
