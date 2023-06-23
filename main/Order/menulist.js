console.log("HELLO");
var db = firebase.firestore();

                // Retrieve documents from the collection and render them in the div
                // var documentsContainer = document.getElementById('addon');
                var orderp = document.getElementById('op');
                var menulist= document.getElementById("dropdown-content")

                // Function to render each document inside the div
                function renderDocument(doc) {
                    let data = doc.data();
                // let documentDiv = document.createElement('div');
                // documentDiv.textContent = doc.data().item;
                // orderlist.appendChild(documentDiv);
                console.log("HELLO");
                menulist.innerHTML+=`
                <p >${data.name}</p>
                <p >${data.price}</p>
                
                
                
                `
                }
// <button id="deleteButton">delete</button>
                // var docfin=document.getElementById('fin');
                // function pas(final){
                //     findiv=document.createElement('div');
                //     findiv.textContent=final;
                //     docfin.appendChild(findiv);
                // }

                // Function to fetch and render all documents in the collection
                function fetchAndRenderDocuments() {
                    // console.log(doc.id);
                db.collection('products') // Replace "your-collection-name" with the actual collection name
                    .get()
                    .then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        
                        renderDocument(doc);
                        // let d=doc.data()
                        // let k=`<div>${d.item}</div>`;
                        // var final;
                        // final+=k
                        
                    }
                    ) ;       //pas(final);
                    })
                    .catch(function(error) {
                    console.error('Error fetching documents: ', error);
                    });
                    }

                    // Call the function to fetch and render the documents when needed
                    fetchAndRenderDocuments();

                    // var deleteButton = document.getElementById('deleteButton');

                    // deleteButton.addEventListener('click', function() {
                    // var docRef = db.collection('products').doc('doc.id');

                    // docRef.delete()
                    //     .then(function() {
                    //     console.log("Document successfully deleted!");
                    //     })
                    //     .catch(function(error) {
                    //     console.error("Error removing document: ", error);
                    //     });
                    // });