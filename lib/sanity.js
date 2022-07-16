import sanityClient from "@sanityClient";

export const client = sanityClient({
	projectId: hq0i8f9k,
	dataSet: "production",
	apiVersion: "2021-10-21", //most recent
	token:
		"skTz4lI85QCKfdUcqzxpcEr2JtnFquKMI8jW5Flab2dm6Yaccg3vzS9fTTCq4KyO0TwB72I0Tx4so3zPBW570fDxFFqq6MsgrOmfxvBdDDmi1nBirasqK1LsXzu0L1VoqFpXpcmjZRd2gzawBv1WsIHZaESeeKtdNoFoHskgRz5HLt5EDKEG",
	useCdn: false,
});
