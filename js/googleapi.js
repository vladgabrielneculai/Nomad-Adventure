  //GOOGLE SHEET API SCRIPT

    // Funcție pentru a actualiza valoarea celulei în Google Sheets
    function updateGoogleSheets() {
        var checkboxes = ["all_terms", "rules", "messages", "emails", "newsletter"];
        var values = [];
    
        // Verifică starea fiecărui checkbox și adaugă "Da" sau "Nu" în array-ul values
        checkboxes.forEach(function(checkboxId) {
          var checkbox = document.getElementById(checkboxId);
          var value = checkbox.checked ? "Da" : "Nu";
          values.push(value);
        });
    
        // Actualizează valoarea celulei A1 cu rezultatul în Google Sheets
        google.script.run.updateSheet(values);
      }
    
      // Funcție pentru a marca checkbox-urile ca bifate sau nebifate pe baza datelor din Google Sheets
      function updateCheckboxes() {
        google.script.run.withSuccessHandler(function(response) {
          var checkboxes = ["all_terms", "rules", "messages", "emails", "newsletter"];
          response.forEach(function(value, index) {
            var checkbox = document.getElementById(checkboxes[index]);
            checkbox.checked = value === "Da";
          });
        }).getSheetData();
      }
    
      // Funcție pentru a trimite datele la Google Sheets folosind Google Sheets API
      function submitData() {
        // Replace 'YOUR_SPREADSHEET_ID' cu ID-ul foii de calcul Google Sheets
        const spreadsheetId = '1LHesh4u_8-faL0iSgLiP1o9l5BeX354IDtBKEY88BLU';
        // Creează un obiect FormData pentru a obține valorile câmpurilor de intrare
        const formData = new FormData(document.getElementById('myForm'));
    
        // Transformă obiectul FormData într-un obiect JSON
        const formDataObject = {};
        formData.forEach((value, key) => {
          formDataObject[key] = value;
        });
    
        // Trimite datele la Google Sheets folosind Google Sheets API
        gapi.client.sheets.spreadsheets.values.append({
          spreadsheetId: spreadsheetId,
          range: 'Test document', // Numele foii de calcul sau numărul de pagină
          valueInputOption: 'RAW',
          insertDataOption: 'INSERT_ROWS',
          resource: {
            values: [Object.values(formDataObject)],
          },
        }).then(function(response) {
          console.log('Datele au fost trimise cu succes!', response.result);
        }, function(reason) {
          console.error('Eroare la trimiterea datelor: ' + reason.result.error.message);
        });
      }
    
      // Funcție pentru a inițializa Google Sheets API și autentificarea utilizatorului
      function initClient() {
        // Configurarea cheii API pe care ai descărcat-o
        gapi.client.init({
          apiKey: 'AIzaSyBs9xIoHjaO42tFsQvxFJ3iv6gJflltKag',
          discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
          clientId: '67497141278-2qpcr0oog6u0ogkbgluo9ha9jeupofo2.apps.googleusercontent.com',
          scope: 'https://www.googleapis.com/auth/spreadsheets',
        }).then(function() {
          // Ascultă evenimentul de clic pe butonul de trimitere
          document.getElementById('submit').addEventListener('click', function() {
            // Înainte de a trimite datele, actualizează Google Sheets cu starea checkbox-urilor
            updateGoogleSheets();
            // Apoi trimite datele la Google Sheets
            submitData();
          });
        });
      }
    
      // Inițializarea clientului și autentificarea utilizatorului
      gapi.load('client', initClient);
    
      // Apelează funcția pentru a inițializa starea initială a checkbox-urilor
      updateCheckboxes();
    