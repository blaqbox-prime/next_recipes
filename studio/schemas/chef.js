export default {
    name: "chef", 
    title: "chef", 
    type: "document", 
    fields: [
        {
            name: "name",
            title: "Chef's Name", type: "string",
           
        },
        {
            name: "image",
            title: "Image", type: "image", options: {
                hotspot: true
            }
        },
        {
            name: 'bio',
            title: "Bio",
            type: "array",
            of: [
                {
                    type: "block",
                    title: "Block",
                    styles: [{title: "Normal", value: "normal"}],
                    lists: [],
                }
            ],
        }
    ]
}