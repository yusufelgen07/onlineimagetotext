

try {

window.addEventListener('beforeunload', function() {
    localStorage.setItem('scrollPosition', window.pageYOffset.toString());
});

document.addEventListener("DOMContentLoaded", () => {
  try {





    const script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    script.type = "text/javascript";
    script.onload = function() {
        console.log("jQuery loaded successfully.");
    };
    script.onerror = function(error) {
        console.error("Error loading jQuery:", error);
        // You can handle the error here, like loading a local version of jQuery or showing a message
    };
    document.head.appendChild(script); // Append the script to the head or body
} catch (error) {
    console.error("Caught an error while attempting to load the script:", error);
}
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const button = document.getElementById('loaderbtn');

download_btn = document.getElementById("downloadButton1");
const observer = new MutationObserver((mutationsList) => {
for (let mutation of mutationsList) {
  if(download_btn.style.display === "block" && button.style.display === "inline" ){download_btn.style.display = "none"}





if (button.style.display !== 'none') {
    const rect = button.getBoundingClientRect();

                    const scrollToPosition = (rect.top + window.scrollY )- (window.innerHeight / 2) + (rect.height / 2);
if (isMobile){window.scrollTo({
top: scrollToPosition
});}
else{
window.scrollTo({
top: scrollToPosition,
behavior: 'smooth'
});}
 window.addEventListener('beforeunload', function() {
                    localStorage.setItem('scrollPosition', scrollToPosition.toString());
                });
break;
}










}
});
observer.observe(button, { attributes: true, attributeFilter: ['style'] });
observer.observe(download_btn, { attributes: true, attributeFilter: ['style'] });

});

// Store scroll position before unload or refresh

// Restore the scroll position when the page is fully loaded
window.addEventListener('DOMContentLoaded', function() {
    var scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition !== null) {
        window.scrollTo(0, scrollPosition);
        localStorage.removeItem('scrollPosition'); // Remove saved scroll position after restoring
    } else {
        window.scrollTo(0, 0); // Scroll to top if no scroll position is saved
    }
});



 // Define your list of options
var optionsList = [
    "Extract Text (up to 10 images at once)",
    "Extract Information (up to 10 images at once)",
    "Image description (up to 10 images at once)",
    "Extract Tables (up to 10 images at once)",
    "Extract Math (up to 10 images at once)"
];



// Function to populate the dropdown with options
function populateDropdown() {
  var dropdown = document.getElementById("optionsList");
  dropdown.innerHTML = '';
  optionsList.forEach(function(option) {
    var optionElement = document.createElement("div");
    optionElement.textContent = option;
    optionElement.classList.add("option");
    optionElement.addEventListener("click", function() {
      selectOption(option);
    });
    dropdown.appendChild(optionElement);
  });
}

// Call the function to populate the dropdown when the page loads
document.addEventListener("DOMContentLoaded", function() {
  populateDropdown();
});

// Function to toggle the dropdown
function toggleDropdown() {
  var dropdown = document.getElementById("optionsDropdown");
  dropdown.classList.toggle("show");
}

// Function to select an option
function selectOption(option) {
  var dropdown = document.getElementById("optionsDropdown");
  var searchInput = document.getElementById("search");
  var dropbtn = document.querySelector(".dropbtn");
  searchInput.value = option;
  dropdown.classList.remove("show");
  dropbtn.textContent = option; // Update button text

  // Update hidden input with selected option value
  document.getElementById("selectedOption").value = option;
  chosenlang = document.getElementById("selectedOption").value
  change_textbox()
  // Check if the selected option is available
  if (option.trim() !== "") {
    // Submit the form only when a valid option is selected

  }
}

// Function to filter options based on search input
function filterOptions() {
  var input, filter, options, i;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  options = document.querySelectorAll("#optionsList .option");
  options.forEach(function(option) {
    var optionText = option.textContent.toUpperCase();
    if (optionText.indexOf(filter) > -1) {
      option.style.display = "";
    } else {
      option.style.display = "none";
    }
  });
}
// Close the dropdown when clicking outside of it
window.onclick = function(event) {
    var dropbtn = document.querySelector(".dropbtn");
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                // Check if the click occurred inside the dropdown content or the dropdown button
                if (!event.target.closest('.dropdown-content') && !event.target.closest('.dropbtn')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
};


  window.history.replaceState({}, document.title, "/");


document.addEventListener("DOMContentLoaded", function() {
    // Get reference to the file input and the loading button
    var fileInput = document.getElementById("my_images");
    var loaderbtn = document.getElementById("loaderbtn");

    var submit_btn = document.getElementById("Button-upload2")
    // Function to show the loading button when the file input is clicked
    function showLoader() {
        loaderbtn.style.display = "inline"; // Display the button
    }

    // Event listener for the file input change
    submit_btn.addEventListener("click", function() {
        if (fileInput.files.length > 0) {
            var file = fileInput.files[0]; // Define the 'file' variable here
            var fileType = file.type.split('/')[0];
            var fileTypeFull = file.type;
            if (fileType === 'image' || fileTypeFull === 'application/pdf') {
                showLoader(); // Call showLoader function to display the button
            } else {
                // If alert is shown, keep the button hidden
                loaderbtn.style.display = "none";
            }
        }
    });


    // Function to hide the loading button when the page is fully loaded
    function hideLoader() {
        loaderbtn.style.display = "none"; // Hide the button
    }

    // Event listener for the page load event
    window.addEventListener("load", hideLoader);
});

  function submitForm() {
    let formData = new FormData();
    const fileInput = document.getElementById('my_images').cloneNode(true); // Deep clone the child
    var totalSize = 0;
    var check = false;
    // Check file types and total size
    for (let i = 0; i < fileInput.files.length; i++) {
        var file = fileInput.files[i];
        totalSize += file.size;

        var fileType = file.type.split('/')[0]; // Get the type of the file (e.g., "image")

        if (fileType !== 'image') {
            check = true;
            break; // Exit the loop early if invalid file type found
        }
    }

    // Perform validations
    if (check) {
        alert('Please upload an image');
        fileInput.value = ''; // Clear the input
        return; // Exit function if invalid file type found
    }

    if (fileInput.files.length > 10) {
        alert('You can upload a maximum of 10 files.');
        fileInput.value = ''; // Clear the input
        return; // Exit function if too many files
    }

    var langvalue = document.getElementById("selectedOption").value;

                // Get the selected file type from the radio button group



    for (let i = 0; i < fileInput.files.length; i++) {
      formData.append('my_images', fileInput.files[i]);

  }
  formData.append('language', langvalue);
  if(langvalue === "Extract Information (up to 10 images at once)" ){formData.append('input', prompt("please enter the information you want to extract"));};

    // If all validations pass, submit the form
    $.ajax({
      url: '/preview_text',
      type: 'POST',
      data: formData,
      processData: false, // Prevent jQuery from processing the FormData object
      contentType: false,
      success: function(response) {
          document.getElementById('preview-text').innerHTML = response;
          MathJax.typesetPromise([document.getElementById('preview-text')])
          .then(() => {
            // Math has been rendered
          })
          .catch((err) => console.log('MathJax typeset failed: ' + err.message));
          if(langvalue === "Extract Tables (up to 10 images at once)"){
          try {
            tables = JSON.parse(response);
          } catch (error) {
              console.error("Failed to parse JSON:", error);
              return;
          }
        renderTables(tables)}
      },
      error: function() {
           loaderbtn.textContent="Error please try again";
           setTimeout(() => { loaderbtn.style.display = "none";
            loaderbtn.textContent="Please Wait ⏳";
           }, 2000);
      }
  }
)



    setTimeout(() => { loaderbtn.textContent="Error please try again";
      setTimeout(() => { loaderbtn.style.display = "none";}, 2000);
}, 600000);



}
function show_images(){
  const previewContainer = document.getElementById("zby");
  var fileInput = document.getElementById('my_images');
  const files = fileInput.files;

  // Clear existing previews
  previewContainer.innerHTML = '';

  if (files.length === 0) {
      return;
  }

  // Set container style for proper layout
  previewContainer.style.display = 'flex';
  previewContainer.style.alignItems = 'center'; // Center align images
  previewContainer.style.overflow = 'hidden'; // Prevent overflow

  previewContainer.style.height = '150px';
 // Moves the container 10px left
 function adjustWidth() {
  if (window.innerWidth < 667) {
    console.log("i did it")//
    previewContainer.style.width = '100%';
    totalWidth = window.innerWidth;
   }
    else {previewContainer.style.width = '966px';
      totalWidth = 966;
    }
    if (1199>window.innerWidth > 666) {
      var dropbtnn = document.getElementById("drobtn");
      dropbtnn.style = ""

     }

}

// Initial adjustment
adjustWidth();

// Adjust on window resize
window.addEventListener('resize', adjustWidth);
  // Calculate the width for each image wrapper
   // Total container width
  const wrapperWidth = Math.floor(totalWidth / files.length); // Evenly divide width
  const height = 150; // Fixed height for each image

  Array.from(files).forEach(file => {
      const wrapper = document.createElement('div'); // Wrapper for each image
      wrapper.style.width = `${wrapperWidth}px`;
      wrapper.style.height = `${height}px`;
      wrapper.style.display = 'flex';
      wrapper.style.alignItems = 'center';
      wrapper.style.justifyContent = 'center';
      wrapper.style.flexShrink = '0'; // Prevent shrinking
      wrapper.style.border = '6px solid #ccc';
      // Optional border for clarity

      if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = function (e) {
              const img = document.createElement('img');
              img.src = e.target.result;
              img.style.maxWidth = '100%'; // Fit within the wrapper
              img.style.maxHeight = '100%'; // Maintain aspect ratio
              img.style.objectFit = 'contain'; // Ensure the full image is visible
              wrapper.appendChild(img);
          };
          reader.readAsDataURL(file);
      } else {
          // Display a placeholder for non-image files (e.g., PDFs)
          const placeholder = document.createElement('div');
          placeholder.textContent = `File: ${file.name}`;
          placeholder.style.textAlign = 'center';
          placeholder.style.color = '#555';
          placeholder.style.fontSize = '14px';
          wrapper.appendChild(placeholder);
      }

      previewContainer.appendChild(wrapper);



  });



}

var filetypeold="PDF";
function submitOption11() {
  const selectedOption = document.querySelector('input[name="option"]:checked');

  var filetyp = selectedOption.value
  langvalue2 = document.getElementById("selectedOption").value ;
  download_btn = document.getElementById("downloadButton1");

  if(langvalue2 === "Extract Math (up to 10 images at once)" && filetyp=="DOC" ){
download_btn.style.display = "none"

}


console.log(filetypeold,filetyp)


if(filetypeold === "DOC"){
  if(langvalue2 === "Extract Math (up to 10 images at once)" && (filetyp=="PDF" || filetyp=="TXT"	))


    {download_btn.style.display = "none" }

}
filetypeold = filetyp;



  $.ajax({
      url: '/file_type',
      type: 'POST',
      data: { 'filetype': filetyp}
  }

    )





  }

  document.addEventListener('DOMContentLoaded', function() {
    const details = document.querySelectorAll('.bee-block-9 details');

    details.forEach(detail => {
      detail.addEventListener('toggle', function() {
        if (this.open) {
          details.forEach(d => {
            if (d !== this && d.open) {
              d.open = false;
            }
          });
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
  const observer2 = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === "characterData" || mutation.type === "childList") {
            // This callback will be triggered when the content of the div changes
            console.log("Content has changed!");
            document.getElementById("downloadButton1").style.display = "block";
            loaderbtn.style.display = "none";
        }
    }
});





// Specify the target node (the element to observe)
const targetNode = document.getElementById("preview-text");

// Define what to observe (character data or child list changes)
const config = {
    characterData: true, // Observe changes to text content
    subtree: true, // Observe changes in child elements as well
    childList: true // Observe additions/removals of child nodes
};
observer2.observe(targetNode, config);
  });
// Start observing the target node with the defined configuration

function choose_language(){
  document.getElementById("downloadButton1").style.display = "none";
}



function change_textbox() {
  langvalue2 = document.getElementById("selectedOption").value ;
  const txt_text= document.getElementById("txt-option-txt");
  const textbox = document.getElementById("textbox");
  const docx_text= document.getElementById("docx-option");
  if (langvalue2 === "Extract Tables (up to 10 images at once)") {


    docx_text.textContent = "to DOCX (Microsoft Word)"
    txt_text.textContent = "To XLSX(Excel Sheet)"
  } else {
    // Show the textbox if the condition is not met
    const docx_text= document.getElementById("docx-option");

    txt_text.textContent = "to TXT (Text Plain)"
    docx_text.textContent = "to DOCX (Microsoft Word)"
  }

  if (langvalue2 === "Extract Math (up to 10 images at once)") {
    const txt_text= document.getElementById("txt-option-txt");
    const docx_text= document.getElementById("docx-option");

    txt_text.textContent = "To TEX(Latex)"
    docx_text.textContent = "To PDF(Solved)"
  }





};








function renderTables(tables) {
  const container = document.getElementById("preview-text");
  container.innerHTML = ""; // Clear existing content

  tables.forEach(table => {
      const tableDiv = document.createElement("div");

      // Add table name as a heading
      const heading = document.createElement("h3");
      heading.textContent = table.table_name;
      tableDiv.appendChild(heading);

      // Create table element
      const tableElement = document.createElement("table");

      // Extract headers from the first key
      const headers = Object.keys(table.table_data);
      const headerRow = document.createElement("tr");
      headers.forEach(header => {
          const th = document.createElement("th");
          th.textContent = header;
          headerRow.appendChild(th);
      });
      tableElement.appendChild(headerRow);

      // Get the number of rows
      const rowCount = table.table_data[headers[0]].length;

      // Create table rows
      for (let i = 0; i < rowCount; i++) {
          const row = document.createElement("tr");
          headers.forEach(header => {
              const td = document.createElement("td");
              td.textContent = table.table_data[header][i] || ""; // Handle empty values
              row.appendChild(td);
          });
          tableElement.appendChild(row);
      }

      tableDiv.appendChild(tableElement);
      container.appendChild(tableDiv);
  });
}



}
catch (e) {
 loaderbtn.textContent="Error please try again";
 setTimeout(() => { loaderbtn.style.display = "none";}, 2000);
}


