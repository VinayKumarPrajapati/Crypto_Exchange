import sanityClient from "@sanity/client";

export const client = sanityClient({
	projectId: "8el3awf8",
	dataset: "production",
	apiVersion: "2021-10-21", //latest api version
	token:
		"sklIImbI95JqQA381V9VBifaQQHwhLj94hRLTh25a6oQDaCMU99RTtXMw3ss1Nzp8wyZywAza74KMqtQe2PVSJLqs8qxCBZXMqpLOIxEBwjHQciU9gpD4LKp8YIyF8TzbEFzBLHlWmkpnHKRZZ5yW5n8kBnLT33MSllKsz52DYCisXUXVROd", // or leave blank for unauthenticated usage
	useCdn: false, // to get latest data
});
