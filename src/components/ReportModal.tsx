import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from "@/components/ui/use-toast";


interface ReportModalProps {
    onClose: () => void;
}

const ReportModalExample: React.FC<ReportModalProps> = ({ onClose }) => {
    const { toast } = useToast();
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [assistanceNeeded, setAssistanceNeeded] = useState<'yes' | 'no' | ''>('');

    const handleSubmit = () => {
        console.log({ subject, description, assistanceNeeded });

        toast({
            title: "Report Submitted",
            description: "Your security incident report has been sent successfully.",
            variant: "default",
        });

        onClose(); // Close modal after showing toast
    };

    return (
        <Dialog open onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Report a Security Incident</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    <div>
                        <Label htmlFor="subject">Subject Matter</Label>
                        <Input
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder="Brief subject of the issue"
                        />
                    </div>

                    <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Describe the incident in detail"
                        />
                    </div>

                    <div>
                        <Label>Do you need immediate assistance?</Label>
                        <RadioGroup
                            value={assistanceNeeded}
                            onValueChange={(val: 'yes' | 'no') => setAssistanceNeeded(val)}
                            className="flex gap-4 mt-2"
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="yes" id="yes" />
                                <Label htmlFor="yes">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id="no" />
                                <Label htmlFor="no">No</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {assistanceNeeded === 'yes' && (
                        <div className="bg-red-50 p-3 rounded-md border border-red-200 text-red-800 text-sm">
                            <strong>Contact Immediately:</strong>
                            <ul className="list-disc list-inside mt-1">
                                <li>Campus Security Cell: +91 98765 43210</li>
                                <li>Cybersecurity Helpline: 1800-111-222</li>
                            </ul>
                        </div>
                    )}

                    {assistanceNeeded === 'no' && (
                        <div className="bg-green-50 p-3 rounded-md border border-green-200 text-green-800 text-sm">
                            <strong>Guidelines:</strong>
                            <ul className="list-disc list-inside mt-1">
                                <li>Change all affected passwords immediately.</li>
                                <li>Run a full virus scan on your device.</li>
                                <li>Enable Two-Factor Authentication on your accounts.</li>
                            </ul>
                        </div>
                    )}
                </div>

                <DialogFooter className="mt-4">
                    <Button variant="secondary" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit}>
                        Submit Report
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ReportModalExample;
