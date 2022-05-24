export const fileUpload = async (file: File) => {
  const cloudUrl = process.env.CLOUD_URL as string;

  const formData = new FormData();
  formData.append('upload_preset','eProject');
  formData.append('file', file);

  try {
      
    const resp = await fetch( cloudUrl, {
      method: 'POST',
      body: formData,
    });

    if ( resp.ok ) {
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    } else {
      throw await resp.json();
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
