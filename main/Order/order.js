console.log("HELLO");
var db = firebase.firestore();

                // Retrieve documents from the collection and render them in the div
                // var documentsContainer = document.getElementById('addon');
                var orderp = document.getElementById('op');
                var orderlist = document.getElementById("orderlist")

                // Function to render each document inside the div
                function renderDocumen(doc) {
                    let data = doc.data();
                // let documentDiv = document.createElement('div');
                // documentDiv.textContent = doc.data().item;
                // orderlist.appendChild(documentDiv);
                console.log("HELLO");
                orderlist.innerHTML+=`
                <div class="Delivery">
                    <div>
                        <h3 >Eatc Delivery</h3>
                        <p >Item:${data.item}</p>
                        <p>${data.email}</p>
                        <p>Seat NO:${data.seat}</p>
                    </div>
                    <div>
                        <p>${data.count}X ${data.item}</p>
                        <p>${data.count}X${data.price}</p>
                        <p>total price ${data.count*data.price}</p>
                        <button id="ProdReady">Ready</button>
                    </div>
                </div>
                `
                }

                // var docfin=document.getElementById('fin');
                // function pas(final){
                //     findiv=document.createElement('div');
                //     findiv.textContent=final;
                //     docfin.appendChild(findiv);
                // }

                // Function to fetch and render all documents in the collection
                function fetchAndRenderDocument() {
                    db.collection('orders') // Replace "your-collection-name" with the actual collection name
                    .get()
                    .then(function(querySnapshot) {
                        querySnapshot.forEach(function(doc) {
                            console.log("😊");
                            renderDocumen(doc);
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
                    fetchAndRenderDocument();