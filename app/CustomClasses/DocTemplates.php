<?php

namespace App\CustomClasses;

use Exception;
use PhpOffice\PhpWord\TemplateProcessor;

class DocTemplates extends TemplateProcessor
{
    protected $file;

    public function __construct(string $file) {
        parent::__construct($file);
        $this->file = $file;
    }

    public function saveAs($fileName)
    {
        $tempFileName = $this->save();
        $test = new DocxConversion($tempFileName, $fileName);
        return $test->read_docx();

        // if (file_exists($fileName)) {
        //     unlink($fileName);
        // }

        // copy($tempFileName, $fileName);
        // unlink($tempFileName);
    }
    
    public function save()
    {
        foreach ($this->tempDocumentHeaders as $index => $xml) {
            $this->savePartWithRels($this->getHeaderName($index), $xml);
        }
        
        $this->savePartWithRels($this->getMainPartName(), $this->tempDocumentMainPart);
        $this->savePartWithRels($this->getSettingsPartName(), $this->tempDocumentSettingsPart);

        foreach ($this->tempDocumentFooters as $index => $xml) {
            $this->savePartWithRels($this->getFooterName($index), $xml);
        }

        $this->zipClass->addFromString($this->getDocumentContentTypesName(), $this->tempDocumentContentTypes);

        // Close zip file
        if (false === $this->zipClass->close()) {
            throw new Exception('Could not close zip file.'); // @codeCoverageIgnore
        }

        return $this->tempDocumentFilename;
    }
}
